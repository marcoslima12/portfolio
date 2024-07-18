import { useEffect, useState, useMemo, ReactNode, useCallback } from "react";
import { Github, LinkedIn, ProfilePic } from "@/assets";
import { Header } from "@/components";
import { roboto } from "@/styles/fonts/fonts";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function Home() {
  const router = useRouter();
  const [currentText, setCurrentText] = useState("criativo");
  

  interface SoftSkillProp {
    text: string;
  }

  interface HardSkillProps {
    skill: string;
  }

  const SoftSkill = ({ text }: SoftSkillProp) => {
    return <span className="font-bold">{text}</span>;
  };

  const HardSkill = ({ skill }: HardSkillProps) => {
    return <span className="text-base text-dark-highlight">{skill}</span>;
  };

  interface WorkExperienceProps {
    time: string;
    role: string;
    company: string;
    about: string;
    skills: string[];
  }

  interface TimeExperencieProps {
    time: string;
  }

  interface TitleExperencieProps {
    title: string;
  }

  interface LocationExperencieProps {
    localation: string;
  }

  interface EducationalExperienceProps {
    title: string;
    time: string;
    location: string;
    note?: string;
  }

  const TimeForExperience = ({ time }: TimeExperencieProps) => {
    return <h3 className="text-sm">{time}</h3>;
  };

  const TitleForExperience = ({ title }: TitleExperencieProps) => {
    return <h3 className="text-xl font-bold">{title}</h3>;
  };

  const LocationForExperience = ({ localation }: LocationExperencieProps) => {
    return <h3 className="text-base">{localation}</h3>;
  };

  const WorkExperience = ({
    about,
    company,
    role,
    time,
    skills,
  }: WorkExperienceProps) => {
    return (
      <div className="mb-8">
        <div className="w-full flex justify-between pb-4">
          <div className="w-1/3 flex flex-col justify-start items-start">
            <TimeForExperience time={time} />
            <TitleForExperience title={role} />
            <LocationForExperience localation={company} />
            <div className="flex justify-start gap-2">
              {skills.map((skill, index) => (
                <HardSkill key={index} skill={skill} />
              ))}
            </div>
          </div>
          <p className="w-1/3">{about}</p>
        </div>
        <hr />
      </div>
    );
  };

  const EducationalExperience = ({
    location,
    time,
    title,
    note,
  }: EducationalExperienceProps) => {
    return (
      <div className="pb-6">
        <TimeForExperience time={time} />
        <TitleForExperience title={title} />
        <LocationForExperience localation={location} />
        <h3 className="text-sm">{note}</h3>
      </div>
    );
  };

  const Banner = () => {
    return (
      <SectionWrapper>
        <div className="w-3/4 flex items-center justify-between mt-36">
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
    );
  };

  const EffectCTA = () => {
    return (
      <SectionWrapper>
        <div className="flex items-center flex-col justify-normal gap-3">
          <h1 className="text-4xl">
            &lt;Um desenvolvedor{" "}
            <span className="text-dark-highlight">{currentText}</span> /&gt;
          </h1>
          <p className="w-1/3 text-center text-xl">
            Além de habilidades técnicas, trago em minha bagagem diversas
            habilidades interpessoais, como <SoftSkill text="boa comunicação" />
            ,
            <SoftSkill text="liderança eficaz" /> ,{" "}
            <SoftSkill text="resolução de conflitos" />,{" "}
            <SoftSkill text="pensamento crítico" /> e{" "}
            <SoftSkill text="trabalho em equipe" />, que adquiri nas minhas
            diversas experiências.
          </p>
        </div>
      </SectionWrapper>
    );
  };

  const WorkHistory = () => {
    return (
      <SectionWrapper>
        <div className="w-3/4 flex flex-col items-start justify-center">
          <SectionTitle title="Experiências Profissionais" />
          <WorkExperience
            about="Sou responsável pelo desenvolvimento frontend dos projetos, além de participar da construção das soluções, participando ativamente desde as etapas mais inicias do produto, como na elicitação de requisitos, 
            testes de usabilidade e validação com stakeholders. Ainda, participo da definição da stack do projeto, corroborando as decisões sobre as melhores tecnologias, arquitetura e fluxo de desenvolvimento. 
            
            Além disso, também atuo como Scrum Master, garantindo a boa e correta aplicação da metodologia, além de participar do gerenciamento do projeto."
            company="LIVE (Laboratório para Cidades Inteligentes)"
            role="Desenvolvedor Frontend | Scrum Master"
            time="Abril de 2024 até o momento"
            skills={["React", "Typescript", "Flutter"]}
          />{" "}
          <WorkExperience
            about="Fui responsável por buscar garantir o sucesso do desenvolvimento de software através da elaboração do backlog de atividades e na supervisão contínua de todas as etapas do processo. Minha abordagem se baseia em metodologias ágeis como Scrum e Kanban, o que me permite coordenar as equipes de forma eficaz.
                Além disso, sirvo como ponto de apoio técnico para o squad, garantindo que desafios técnicos sejam superados e que as melhores práticas sejam seguidas ao longo do desenvolvimento. Minha atuação se estende à coordenação dos escopos, prazos e entregáveis, em estreita colaboração com os clientes e o time, com o objetivo de assegurar não apenas uma experiência de alta qualidade, mas também resultados excepcionais"
            company="CITi (Centro Integrado de Tecnologia da UFPE)"
            role="Gerente de Software"
            time="Dezembro de 2022 até dezembro de 2023"
            skills={["React", "Typescript", "Flutter"]}
          />{" "}
          <WorkExperience
            about="Atuei no desenvolvimento de sistemas web responsivos,
                  trabalhando no frontend como também no backend.
                  Minha trajetória inclui a utilização de tecnologias como React,
                  Next.js, Git, Github, TypeScript, Express e Prisma.
                  Tive uma jornada no desenvolvimento web que me capacitou a
                  transformar designs em produtos finais de alta qualidade,
                  combinando criatividade e conhecimento técnico de maneira
                  eficaz."
            company="CITi (Centro Integrado de Tecnologia da UFPE)"
            role="Desenvolvedor Fullstack"
            time="Abril de 2024 até o momento"
            skills={["React", "Typescript", "Flutter"]}
          />{" "}
          <WorkExperience
            about="Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          provident consequuntur sint delectus excepturi fugiat voluptas
          suscipit eum blanditiis reiciendis et placeat sapiente vel, iure
          eius autem enim deserunt quidem."
            company="LIVE (Laboratório para Cidades Inteligentes)"
            role="Desenvolvedor Frontend | Scrum Master"
            time="Abril de 2024 até o momento"
            skills={["React", "Typescript", "Flutter"]}
          />{" "}
        </div>
      </SectionWrapper>
    );
  };



  const EducationalBackgound = () => {
    return (
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
    );
  };

  interface ProjectProps {
    title: string;
    about: string;
  }
  const Project = ({ about, title }: ProjectProps) => {
    return (
      <div className="flex flex-col gap-2 w-1/4 flex-auto max-w-96">
        <TitleForExperience title={title} />
        <p>{about}</p>
      </div>
    );
  };

  const Projects = () => {
    return (
      <SectionWrapper>
        <div className="w-3/4 flex flex-col">
          <SectionTitle title="Projetos que já desenvolvi" />
          <div className="flex justify-start items-center gap-24 flex-wrap">
            <Project
              about={
                "Sou responsável pelo desenvolvimento frontend dos projetos, além de participar da construção das soluções, estando presente nas etapas iniciais de ideação e validação até às últimas, de testes e entrega e do processo de gerenacimento dos mesmos"
              }
              title="CITI+"
            />
            <Project
              about={
                "Sou responsável pelo desenvolvimento frontend dos projetos, além de participar da construção das soluções, estando presente nas etapas iniciais de ideação e validação até às últimas, de testes e entrega e do processo de gerenacimento dos mesmos"
              }
              title="CITI+"
            />
            <Project
              about={
                "Sou responsável pelo desenvolvimento frontend dos projetos, além de participar da construção das soluções, estando presente nas etapas iniciais de ideação e validação até às últimas, de testes e entrega e do processo de gerenacimento dos mesmos"
              }
              title="CITI+"
            />
            <Project
              about={
                "Sou responsável pelo desenvolvimento frontend dos projetos, além de participar da construção das soluções, estando presente nas etapas iniciais de ideação e validação até às últimas, de testes e entrega e do processo de gerenacimento dos mesmos"
              }
              title="CITI+"
            />
            <Project
              about={
                "Sou responsável pelo desenvolvimento frontend dos projetos, além de participar da construção das soluções, estando presente nas etapas iniciais de ideação e validação até às últimas, de testes e entrega e do processo de gerenacimento dos mesmos"
              }
              title="CITI+"
            />
            <Project
              about={
                "Sou responsável pelo desenvolvimento frontend dos projetos, além de participar da construção das soluções, estando presente nas etapas iniciais de ideação e validação até às últimas, de testes e entrega e do processo de gerenacimento dos mesmos"
              }
              title="CITI+"
            />
            <Project
              about={
                "Sou responsável pelo desenvolvimento frontend dos projetos, além de participar da construção das soluções, estando presente nas etapas iniciais de ideação e validação até às últimas, de testes e entrega e do processo de gerenacimento dos mesmos"
              }
              title="CITI+"
            />
            <Project
              about={
                "Sou responsável pelo desenvolvimento frontend dos projetos, além de participar da construção das soluções, estando presente nas etapas iniciais de ideação e validação até às últimas, de testes e entrega e do processo de gerenacimento dos mesmos"
              }
              title="CITI+"
            />
            <Project
              about={
                "Sou responsável pelo desenvolvimento frontend dos projetos, além de participar da construção das soluções, estando presente nas etapas iniciais de ideação e validação até às últimas, de testes e entrega e do processo de gerenacimento dos mesmos"
              }
              title="CITi+"
            />
          </div>
        </div>
      </SectionWrapper>
    );
  };

  /* const changeSkillText = useCallback(() => {
    const softSkills = [
      "criativo",
      "comunicativo",
      "proativo",
      "resiliente",
      "líder",
      "apaixonado pelo que faz",
    ];
    setCurrentText((prev) => {
      const currentIndex = softSkills.indexOf(prev);
      const nextIndex = (currentIndex + 1) % softSkills.length;
      return softSkills[nextIndex];
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(changeSkillText, 1000);
    return () => clearInterval(intervalId);
  }, [changeSkillText]); */

  return (
    <>
      <Header />
      <Banner />
      <EffectCTA />
      <WorkHistory />
      <EducationalBackgound />
      <Projects />
    </>
  );
}
