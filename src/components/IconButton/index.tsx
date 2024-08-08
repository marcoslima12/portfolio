import { StaticImageData } from "next/image";
import Image from "next/image";
import { ReactNode } from "react";

interface IconButtonComponentProps {
    onClick: () => void;
    icon: ReactNode;
    alt: string;
  }

  export const IconButtonComponent = ({ alt, icon, onClick }: IconButtonComponentProps) => {
    return (
      <>
        <button
          onClick={onClick}
          className="transition-transform duration-300 hover:rotate-180"
        >
          {icon}
        </button>
      </>
    );
  };