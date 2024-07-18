import { LanguageIcon, LogoDark, ThemeIcon } from "@/assets";
import Image, { ImageProps, StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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

  interface IconButtonProps {
    onClick: () => void;
    icon: StaticImageData;
    alt: string;
  }

  const IconButton = ({ alt, icon, onClick }: IconButtonProps) => {
    return (
      <>
        <button
          onClick={onClick}
          className="transition-transform duration-300 hover:rotate-180"
        >
          <Image src={icon} alt={alt} />
        </button>
      </>
    );
  };

  return (
    <header className=" bg-dark-primary w-full h-32 shadow-lg shadow-light-highlight fixed">
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
            <IconButton
              alt="Botão para alternar o tema entre claro e escuro"
              icon={ThemeIcon}
              onClick={() => console.log("Mudar o tema")}
            />
            <IconButton
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
