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
import { NavOp } from "../NavOp";
import { useNav } from "@/contexts/navContext";
import { Hamburguer } from "../Icons/Hamburguer";
import { Light } from "../Icons/Light";

export const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const { theme, toggleTheme } = useTheme();
  const { isNavOpen, toggleNav } = useNav();

  return (
    <header className="bg-light-primary dark:bg-dark-primary w-full h-16 lg:h-32  shadow-sm lg:shadow-lg shadow-highlight lg:shadow-highlight fixed z-10 ">
      <div className="container mx-auto flex items-center justify-between h-full p-6 lg:py-0 lg:px-10 xl:px-0">
        <Image
          src={theme === "dark" ? LogoDark : LogoLight}
          alt="Logo MarcosAntonio marcante"
          className="w-[150px] lg:w-auto"
        />
        <div className="hidden lg:flex items-center gap-9">
          <nav className="flex items-center">
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
              icon={<Light fill={theme === "dark" ? "#F3F7EC" : "#2C3132"} />}
              onClick={() => toggleTheme()}
            />
          </div>
        </div>
        <div className="flex gap-4 lg:hidden items-center justify-between">
          <div className=" flex items-center justify-center ml-6">
            <IconButtonComponent
              alt="Botão para alternar o tema entre claro e escuro"
              icon={
                <Light
                  width={20}
                  height={20}
                  fill={theme === "dark" ? "#F3F7EC" : "#2C3132"}
                />
              }
              onClick={() => toggleTheme()}
            />
          </div>
          <button onClick={toggleNav}>
            <Hamburguer
              width={28}
              height={28}
              fill={theme === "dark" ? "#F3F7EC" : ""}
            />
          </button>
        </div>
      </div>
      <div
        className={`shadow-sm shadow-highlight lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isNavOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-start justify-center w-full bg-light-primary dark:bg-dark-primary">
          <NavOp currentPath={currentPath} link="/" pageName="Início" />
          <NavOp currentPath={currentPath} link="/about" pageName="Sobre" />
          <NavOp currentPath={currentPath} link="/contact" pageName="Contato" />
        </nav>
      </div>
    </header>
  );
};
