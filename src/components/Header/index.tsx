import { LanguageIcon, LogoDark, ThemeIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconButtonComponent } from "../IconButton";

export const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  interface navOpRouting {
    link: string;
    pageName: string;
    currentPath: string;
  }

  const NavOp = ({ link, pageName, currentPath }: navOpRouting) => {
    return (
      <Link href={link}>
        <span
          className={`text-lg font-medium hover:text-dark-highlight transition-all border-l-4 pl-2 ${
            currentPath === link
              ? "border-dark-highlight text-dark-highlight"
              : "border-transparent"
          }`}
        >
          {pageName}
        </span>
      </Link>
    );
  };

  return (
    <header className=" bg-dark-primary w-full h-32 shadow-lg shadow-light-highlight mb-36 fixed z-10">
      <div className="container mx-auto flex items-center justify-between h-full">
        <Image
          src={LogoDark}
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
              icon={ThemeIcon}
              onClick={() => console.log("Mudar o tema")}
            />
            <IconButtonComponent
              alt="Botão para mudar o idioma entre português e inglês"
              icon={LanguageIcon}
              onClick={() => console.log("Mudar o idioma")}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
