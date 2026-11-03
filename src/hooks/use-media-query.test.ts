import { act, renderHook } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { useMediaQuery } from "./use-media-query";

afterEach(() => vi.restoreAllMocks());
it("selects the correct media variant on the first render and follows viewport changes", () => {
  let listener = () => {};
  const media = {
    matches: true,
    addEventListener: vi.fn((_event, update) => {
      listener = update;
    }),
    removeEventListener: vi.fn(),
  };
  vi.spyOn(window, "matchMedia").mockReturnValue(
    media as unknown as MediaQueryList,
  );
  const { result, unmount } = renderHook(() =>
    useMediaQuery("(max-width: 800px)"),
  );
  expect(result.current).toBe(true);
  act(() => {
    media.matches = false;
    listener();
  });
  expect(result.current).toBe(false);
  unmount();
  expect(media.removeEventListener).toHaveBeenCalledWith("change", listener);
});
