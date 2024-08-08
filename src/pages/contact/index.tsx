import { LinkedInDark, LanguageIconLight, ProfilePic, LinkedInLight, EmailIconDark, EmailIconLight, PhoneDark, PhoneLight, CarouselImage5, ProfileContact } from "@/assets";
import { Header } from "@/components";
import { ImageProfile } from "@/components/ProfileImage";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useTheme } from "@/contexts/themeContext";
import Image, { StaticImageData } from "next/image";

interface ContactOptionProps {
  icon: StaticImageData;
  info: string;
  alt: string;
}

const ContactOption = ({ alt, icon, info }: ContactOptionProps) => {
  return (
    <div className="flex gap-3 text-light-text dark:text-dark-text">
      <Image src={icon} alt={alt} />
      <span className="text-sm lg:text-lg">{info}</span>
    </div>
  );
};

const Contact = () => {
  const {theme } = useTheme();

  return (
    <div className=" bg-light-primary dark:bg-dark-primary w-full lg:h-screen flex flex-col justify-between  items-center">
      <Header />
      <SectionWrapper>
        <div className="w-3/4 flex items-start lg:items-center justify-between mt-14 lg:mt-36 h-screen lg:h-auto">
          <div className="w-full lg:w-1/2 gap-9 flex flex-col justify-around items-center lg:items-start">
            <p className="text-lg lg:text-2xl text-light-text dark:text-dark-text text-center lg:text-start">
              Se você busca um profissional que combina habilidades técnicas
              sólidas com uma mentalidade inovadora e compromisso com a
              excelência, estou aqui para colaborar e fazer a diferença.
            </p>
            <h1 className="text-2xl lg:text-4xl font-bold text-light-text dark:text-dark-text">Fala comigo!</h1>
            <div className="flex flex-col justify-evenly items-start gap-4">
              <ContactOption
                icon={theme === "dark" ? EmailIconDark : EmailIconLight}
                alt="Ícone de email"
                info="marcosantonio-10@live.com"
              />
              <ContactOption
                icon={theme === "dark" ? PhoneDark : PhoneLight}
                alt="Ícone de phone"
                info="(81) 99349-4960"
              />
              <ContactOption
                icon={theme === "dark" ? LinkedInDark : LinkedInLight}
                alt="Ícone do LinkedIn"
                info="in/marcos-antonio-vital-lima"
              />
            </div>
          </div>
          <ImageProfile image={ProfileContact} />
        </div>
      </SectionWrapper>
      <span className="text-sm mb-4 lg:mb-3 text-light-text dark:text-dark-text">
        {" "}
        &lt;feito por{" "}
        <span className="text-dark-highlight">Marcante</span> /&gt;
      </span>
    </div>
  );
};

export default Contact;
