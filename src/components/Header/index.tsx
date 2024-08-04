import {
  LanguageIconDark,
  LanguageIconLight,
  LogoDark,
  LogoLight,
  ThemeIconDark,
  ThemeIconLight,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconButtonComponent } from "../IconButton";
import { useTheme } from "@/contexts/themeContext";
import { useEffect } from "react";

export const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  interface navOpRouting {
    link: string;
    pageName: string;
    currentPath: string;
  }

  const { theme, toggleTheme } = useTheme();

  const NavOp = ({ link, pageName, currentPath }: navOpRouting) => {
    return (
      <Link href={link}>
        <span
          className={`dark:text-light-primary dark:hover:text-light-highlight text-lg font-medium text-light-highlight hover:text-light-text transition-all border-l-4 pl-2 ${
            currentPath === link
              ? "border-light-text  text-light-text dark:text-dark-highlight dark:border-dark-highlight"
              : "border-transparent"
          }`}
        >
          {pageName}
        </span>
      </Link>
    );
  };

  return (
    <header className="bg-light-primary dark:bg-dark-primary w-full h-32 shadow-lg shadow-light-highlight mb-36 fixed z-10">
      <div className="container mx-auto flex items-center justify-between h-full">
        <Image
          src={theme === "dark" ? LogoDark : LogoLight}
          alt="Logo MarcosAntonio marcante"
          className="h-full"
        />
        <div className="flex items-center gap-9">
          <nav className="flex items-center gap-12">
            <NavOp currentPath={currentPath} link="/" pageName="Início" />
            <NavOp currentPath={currentPath} link="/about" pageName="Sobre" />
            <NavOp
              currentPath={currentPath}
              link="/contact"
              pageName="Contato"
            />
          </nav>
          <div className="flex gap-8 ml-4">
            <IconButtonComponent
              alt="Botão para alternar o tema entre claro e escuro"
              icon={theme === "dark" ? ThemeIconDark : ThemeIconLight}
              onClick={() => toggleTheme()}
            />
            <IconButtonComponent
              alt="Botão para mudar o idioma entre português e inglês"
              icon={theme == "dark" ? LanguageIconDark : LanguageIconLight}
              onClick={() => console.log("Mudar o idioma")}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
