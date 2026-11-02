import type { ReactNode } from "react";
import { Reveal } from "./studio/Motion";
export const Page = ({ children }: { children: ReactNode }) => (
  <main id="main-content" className="inner-page">
    {children}
  </main>
);
export const PageHeader = ({
  eyebrow,
  title,
  description,
  index,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  index?: string;
}) => (
  <header className="page-header container">
    <Reveal>
      <span className="eyebrow">
        {index && <span className="header-index">{index} / </span>}
        {eyebrow}
      </span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </Reveal>
  </header>
);
