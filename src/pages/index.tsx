import { useEffect, useState, useMemo, ReactNode } from "react";
import { Github, LinkedIn, ProfilePic } from "@/assets";
import { Header } from "@/components";
import { roboto } from "@/styles/fonts/fonts";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [currentText, setCurrentText] = useState("criativo");
  const softSkills = [
    "criativo",
    "comunicativo",
    "proativo",
    "resiliente",
    "líder",
    "apaixonado pelo que faz",
  ];

  /* useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevName) => {
        const currentIndex = softSkills.indexOf(prevName);
        const nextIndex = (currentIndex + 1) % softSkills.length;
        return softSkills[nextIndex];
      });
    }, 1000); // Alterna a cada 1 segundo

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  interface SoftSkillProp {
    text: string;
  }

  const SoftSkill = ({ text }: SoftSkillProp) => {
    return <span className="font-bold">{text}</span>;
  };

  interface SectionWrapperProps {
    children: ReactNode;
  }
  const SectionWrapper = ({ children }: SectionWrapperProps) => {
    return (
      <div className="w-full pt-8 pb-8 container mx-auto flex items-center justify-center">
        {children}
      </div>
    );
  };

  interface HardSkillProps {
    skill: string;
  }
  const HardSkill = ({ skill }: HardSkillProps) => {
    return <span className="text-base text-dark-highlight">{skill}</span>;
  };

  interface WorkExperienceProps {
    time: string;
    role: string;
    company: string;
    about: string;
  }

  interface TimeExperencieProps {
    time: string;
  }

  const TimeForExperience = ({ time }: TimeExperencieProps) => {
    return <h3 className="text-sm">{time}</h3>;
  };

  interface TitleExperencieProps {
    title: string;
  }

  const TitleForExperience = ({ title }: TitleExperencieProps) => {
    return <h3 className="text-xl">{title}</h3>;
  };

  interface LocationExperencieProps {
    localation: string;
  }

  const LocationForExperience = ({ localation }: LocationExperencieProps) => {
    return <h3 className="text-base">{localation}</h3>;
  };

  const WorkExperience = ({
    about,
    company,
    role,
    time,
  }: WorkExperienceProps) => {
    return (
      <div className="mb-8">
        <div className="w-full flex justify-between pb-4">
          <div className="w-1/3 flex flex-col justify-start items-start">
            <TimeForExperience time={time} />
            <h2 className="text-xl">{role}</h2>
            <h2 className="text-base">{company}</h2>
            <div className="flex justify-start gap-2">
              <HardSkill skill="React" />
              <HardSkill skill="React" />
              <HardSkill skill="React" />
            </div>
          </div>
          <p className="w-1/3">{about}</p>
        </div>
        <hr />
      </div>
    );
  };

  interface EducationalExperienceProps {
    title: string;
    time: string;
    location: string;
    note?: string;
  }

  const EducationalExperience = ({
    location,
    time,
    title,
    note
  }: EducationalExperienceProps) => {
    return (
      <div className="pb-6">
        <TimeForExperience time={time} /> <TitleForExperience title={title} />
        <LocationForExperience localation={location} />
        <h3 className="text-sm">{note}</h3>
      </div>
    );
  };

  interface SectionTitleProps {
    title: string;
  }

  const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
      <h1 className="text-3xl underline-offset-8 hover:underline decoration-dark-highlight pb-8">
        Experiências profissionais
      </h1>
    );
  };

  return (
    <div>
      <Header />

      <SectionWrapper>
        <div className="w-3/4 flex items-center justify-between">
          <div className="w-1/2 gap-9 flex flex-col justify-around items-start">
            <h1 className="text-2xl">
              Desenvolvedor Frontend | React | Next.js | Typescript | Scrum
              Master | Analista de Projetos | Pós Junior
            </h1>
            <p className="text-xl">
              Oii. Tudo bem? Me chamo Marcos, mas pode me chamar de Marcante!
              <br />
              <br />
              Sou um entusiasta de tecnologia, inovação e de como podemos
              transformar ideias em soluções de alto impacto, solucionando
              problemas, aprimorando processos e impactando pessoas e contextos.
            </p>
            <div className="w-1/2 flex items-start justify-start gap-5">
              <button
                onClick={() => router.push("/contact")}
                className="w-32 bg-dark-highlight h-9 rounded-2xl text-dark-primary hover:text-dark-text transition-all"
              >
                Fala comigo
              </button>

              <Link
                href={"https://www.linkedin.com/in/marcos-antonio-vital-lima/"}
                className="border-2 rounded-3xl p-2"
                target="_blank"
              >
                <Image src={LinkedIn} alt="ícone do linkedin" />
              </Link>

              <Link
                className="border-2 rounded-3xl p-2"
                href={"https://github.com/marcoslima12"}
                target="_blank"
              >
                <Image src={Github} alt="ícone do github" />
              </Link>
            </div>
          </div>
          <Image src={ProfilePic} alt="Foto de perfil de Marcos Antonio" />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex items-center flex-col justify-normal gap-3">
          <h1 className="text-4xl">
            &lt;Um desenvolvedor{" "}
            <span className="text-dark-highlight">{currentText}</span> /&gt;
          </h1>
          <p className="w-1/3 text-center text-xl">
            Além de habilidades técnicas, trago em minha bagagem diversas
            habilidades interpessoais, como <SoftSkill text="boa comunicação" />
            , <SoftSkill text="liderança eficaz" /> ,{" "}
            <SoftSkill text="resolução de conflitos" />,{" "}
            <SoftSkill text="pensamento crítico" /> e{" "}
            <SoftSkill text="trabalho em equipe" />, que adquiri nas minhas
            diversas experiências.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="w-3/4 flex flex-col items-start justify-center">
          <SectionTitle title="Experiências Profissionais" />
          <WorkExperience
            about="Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                provident consequuntur sint delectus excepturi fugiat voluptas
                suscipit eum blanditiis reiciendis et placeat sapiente vel, iure
                eius autem enim deserunt quidem."
            company="LIVE (Laboratório para Cidades Inteligentes)"
            role="Desenvolvedor Frontend | Scrum Master"
            time="Abril de 2024 até o momento"
          />{" "}
          <WorkExperience
            about="Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                provident consequuntur sint delectus excepturi fugiat voluptas
                suscipit eum blanditiis reiciendis et placeat sapiente vel, iure
                eius autem enim deserunt quidem."
            company="LIVE (Laboratório para Cidades Inteligentes)"
            role="Desenvolvedor Frontend | Scrum Master"
            time="Abril de 2024 até o momento"
          />{" "}
          <WorkExperience
            about="Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                provident consequuntur sint delectus excepturi fugiat voluptas
                suscipit eum blanditiis reiciendis et placeat sapiente vel, iure
                eius autem enim deserunt quidem."
            company="LIVE (Laboratório para Cidades Inteligentes)"
            role="Desenvolvedor Frontend | Scrum Master"
            time="Abril de 2024 até o momento"
          />{" "}
          <WorkExperience
            about="Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                provident consequuntur sint delectus excepturi fugiat voluptas
                suscipit eum blanditiis reiciendis et placeat sapiente vel, iure
                eius autem enim deserunt quidem."
            company="LIVE (Laboratório para Cidades Inteligentes)"
            role="Desenvolvedor Frontend | Scrum Master"
            time="Abril de 2024 até o momento"
          />{" "}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="w-3/4 flex flex-col items-start justify-center gap-1">
          <SectionTitle title="Jornada Acadêmica" />

          <EducationalExperience
            location="UFPE"
            time="De janeiro de 2022 até o momento"
            title="Sistemas de Informação"
          />
          <EducationalExperience
            location="UFPE"
            time="De fevereiro de 2019 até janeiro de 2022"
            title="Engenharia da Computação"
            note="Interrompida com aproveitamento de matérias e carga horária"
          />
        </div>
      </SectionWrapper>
    </div>
  );
}
