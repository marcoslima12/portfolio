import Image, { StaticImageData } from "next/image";

interface ImageProfileProps {
  image: StaticImageData;
}

export const ImageProfile = ({ image }: ImageProfileProps) => {
  return (
    <Image
      className="hidden lg:flex rounded-full w-[456px] h-[456px] border-2 dark:border-light-highlight border-light-text shadow-dark-primary"
      src={image}
      alt="Foto de perfil de Marcos Antonio"
    />
  );
};
