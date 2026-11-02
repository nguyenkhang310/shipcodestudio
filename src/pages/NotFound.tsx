import { Page } from "@/components/Page";
import { Action } from "@/components/studio/Actions";
export default function NotFound() {
  return (
    <Page>
      <div className="not-found">
        <span>404</span>
        <h1>Trang này chưa có ở đây.</h1>
        <p>
          Đường dẫn có thể đã thay đổi.
          <br />
          Bạn có thể quay về trang chủ để tiếp tục khám phá.
        </p>
        <Action to="/">Về trang chủ</Action>
      </div>
    </Page>
  );
}
