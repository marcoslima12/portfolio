import Image, { StaticImageData } from "next/image";

interface ImageProfileProps {
  image: StaticImageData;
}

export const ImageProfile = ({ image }: ImageProfileProps) => {
  return (
    <Image
      className="hidden md:flex rounded-full md:w-[250px] md:h-[250px] lg:w-[456px] lg:h-[456px] border-2 dark:border-highlight border-light-text shadow-dark-primary"
      src={image}
      alt="Foto de perfil de Marcos Antonio"
    />
  );
};
