import {
  ProfileContact,
} from "@/assets";
import { Header } from "@/components";
import { Email } from "@/components/Icons/Email";
import { LinkedIn } from "@/components/Icons/LinkedIn";
import { Phone } from "@/components/Icons/Phone";
import { ImageProfile } from "@/components/ProfileImage";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useTheme } from "@/contexts/themeContext";
import { ReactNode } from "react";

interface ContactOptionProps {
  icon: ReactNode;
  info: string;
  link?: string;
}

const ContactOption = ({ icon, info, link }: ContactOptionProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-3 items-center justify-start text-light-text dark:text-dark-text hover:${
        link ? "underline" : "none"
      }`}
    >
      {icon}
      <span className="text-sm lg:text-lg">{info}</span>
    </a>
  );
};

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className=" bg-light-primary dark:bg-dark-primary w-full h-screen flex flex-col justify-between items-center">
      <Header />
      <SectionWrapper>
        <div className="w-3/4 flex items-start lg:items-center justify-between mt-14 lg:mt-36  lg:h-auto">
          <div className="w-full lg:w-1/2 gap-9 flex flex-col justify-around items-center lg:items-start">
            <p className="text-lg lg:text-2xl text-light-text dark:text-dark-text text-center lg:text-start">
              Se você busca um profissional que combina habilidades técnicas
              sólidas com uma mentalidade inovadora e compromisso com a
              excelência, estou aqui para colaborar e fazer a diferença.
            </p>
            <h1 className="text-2xl lg:text-4xl font-bold text-light-text dark:text-dark-text">
              Fala comigo!
            </h1>
            <div className="flex flex-col justify-evenly items-start gap-4">
              <ContactOption
                icon={<Email fill={theme === "dark" ? "#F3F7EC" : "#2C3132"} />}
                info="marcosantonio-10@live.com"
              />
              <ContactOption
                icon={<Phone fill={theme === "dark" ? "#F3F7EC" : "#2C3132"} />}
                link="https://wa.me/5581993494960"
                info="(81) 99349-4960"
              />
              <ContactOption
                icon={
                  <LinkedIn fill={theme === "dark" ? "#F3F7EC" : "#2C3132"} />
                }
                link="https://www.linkedin.com/in/marcos-antonio-vital-lima"
                info="in/marcos-antonio-vital-lima"
              />
            </div>
          </div>
          <ImageProfile image={ProfileContact} />
        </div>
      </SectionWrapper>
      <span className="text-sm mb-4 lg:mb-3 text-light-text dark:text-dark-text">
        {" "}
        &lt;feito por <span className="text-dark-highlight">Marcante</span>{" "}
        /&gt;
      </span>
    </div>
  );
};

export default Contact;
