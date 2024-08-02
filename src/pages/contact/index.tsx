import { EmailIcon, LinkedIn, PhoneIcone, ProfilePic } from "@/assets";
import { Header } from "@/components";
import { SectionWrapper } from "@/components/SectionWrapper";
import Image, { StaticImageData } from "next/image";

interface ContactOptionProps {
  icon: StaticImageData;
  info: string;
  alt: string;
}

const ContactOption = ({ alt, icon, info }: ContactOptionProps) => {
  return (
    <div className="flex gap-3">
      <Image src={icon} alt={alt} />
      <span className="text-lg">{info}</span>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between  items-center">
      <Header />
      <SectionWrapper>
        <div className="w-3/4 flex items-center justify-between mt-36">
          <div className="w-1/2 gap-9 flex flex-col justify-around items-start">
            <p className="text-2xl">
              Se você busca um profissional que combina habilidades técnicas
              sólidas com uma mentalidade inovadora e compromisso com a
              excelência, estou aqui para colaborar e fazer a diferença.
            </p>
            <h1 className="text-4xl font-bold">Fala comigo!</h1>
            <div className="flex flex-col justify-evenly items-start gap-4">
              <ContactOption
                icon={EmailIcon}
                alt="Ícone de email"
                info="marcosantonio-10@live.com"
              />
              <ContactOption
                icon={PhoneIcone}
                alt="Ícone de phone"
                info="(81) 99349-4960"
              />
              <ContactOption
                icon={LinkedIn}
                alt="Ícone do LinkedIn"
                info="in/marcos-antonio-vital-lima"
              />
            </div>
          </div>
          <Image src={ProfilePic} alt="Foto de perfil de Marcos Antonio" />
        </div>
      </SectionWrapper>
      <span className="text-sm mb-3">
        {" "}
        &lt; made with love by{" "}
        <span className="text-dark-highlight">Marcante</span> /&gt;
      </span>
    </div>
  );
};

export default Contact;
