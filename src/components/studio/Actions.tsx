import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
export function Action({
  to = "/lien-he",
  children = "Trao đổi dự án",
  secondary = false,
  className = "",
}: {
  to?: string;
  children?: React.ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`${secondary ? "text-link" : "pill-button"} ${className}`}
    >
      {children}
      {secondary ? <ChevronRight size={17} /> : <ArrowUpRight size={17} />}
    </Link>
  );
}
