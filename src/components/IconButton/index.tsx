import { StaticImageData } from "next/image";
import Image from "next/image";

interface IconButtonComponentProps {
    onClick: () => void;
    icon: StaticImageData;
    alt: string;
  }

  export const IconButtonComponent = ({ alt, icon, onClick }: IconButtonComponentProps) => {
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