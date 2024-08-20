import { ProfileContact } from "@/assets";
import { Header } from "@/components";
import { ContactOption } from "@/components/Contact";
import { Email } from "@/components/Icons/Email";
import { LinkedIn } from "@/components/Icons/LinkedIn";
import { Phone } from "@/components/Icons/Phone";
import { ImageProfile } from "@/components/ProfileImage";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useTheme } from "@/contexts/themeContext";
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className=" bg-light-primary dark:bg-dark-primary w-full h-screen flex flex-col justify-between items-center">
      <Head>
        <title>Marcos | Contato</title>
      </Head>
      <Header />
      <SectionWrapper>
        <div className="w-3/4 flex md:flex-col lg:flex-row md:items-center md:gap-4 items-start lg:items-center lg:justify-between mt-14 lg:mt-44  lg:h-auto">
          <div className="w-full md:order-2 lg:order-first lg:w-1/2 gap-9 flex flex-col justify-around items-center lg:items-start">
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
        &lt;feito por <Link href={"https://github.com/marcoslima12"} className="text-highlight">marcoslima12</Link>{" "}
        /&gt;
      </span>
    </div>
  );
};

export default Contact;
