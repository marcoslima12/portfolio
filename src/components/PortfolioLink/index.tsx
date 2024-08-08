import { StaticImageData } from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/themeContext";
import Image from "next/image";
import { ReactNode } from "react";

interface PortfolioLinkProps {
  href: string;
  icon: ReactNode;
  alt: string;
}

export const PortfolioLink = ({ alt, href, icon }: PortfolioLinkProps) => {
  const { theme } = useTheme();
  return (
    <Link
      href={href}
      className="border-2 border-light-text dark:border-dark-text rounded-3xl p-2"
      target="_blank"
    >
      {icon}
    </Link>
  );
};
