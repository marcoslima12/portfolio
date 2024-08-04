import { StaticImageData } from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/themeContext";
import Image from "next/image";

interface PortfolioLinkProps {
  href: string;
  icons: StaticImageData[];
  alt: string;
}

export const PortfolioLink = ({ alt, href, icons }: PortfolioLinkProps) => {
  const { theme } = useTheme();
  return (
    <Link
      href={href}
      className="border-2 border-light-text dark:border-dark-text rounded-3xl p-2"
      target="_blank"
    >
      <Image src={theme === "dark" ? icons[0] : icons[1]} alt={alt} />
    </Link>
  );
};
