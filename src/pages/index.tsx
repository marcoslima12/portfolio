import { useEffect, useState, useMemo, ReactNode, useCallback } from "react";
import {
  LinkedInDark,
  LanguageIconLight,
  ProfilePic,
  LinkedInLight,
  GithubDark,
  GithubLight,
} from "@/assets";
import { Header } from "@/components";
import { roboto } from "@/styles/fonts/fonts";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useTheme } from "@/contexts/themeContext";

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
    return <h3 className="text-sm text-light-text dark:text-dark-text">{time}</h3>;
  };

  const TitleForExperience = ({ title }: TitleExperencieProps) => {
    return <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{title}</h3>;
  };

  const LocationForExperience = ({ localation }: LocationExperencieProps) => {
    return <h3 className="text-base text-light-text dark:text-dark-text">{localation}</h3>;
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
            <div className="flex justify-start flex-wrap items-center gap-2">
              {skills.map((skill, index) => (
                <HardSkill key={index} skill={skill} />
              ))}
            </div>
          </div>
          <p className="w-1/3 text-light-text dark:text-dark-text">{about}</p>
        </div>
        <hr className="border-light-text dark:border-dark-text" />
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
        <h3 className="text-sm text-light-text dark:text-dark-text">{note}</h3>
      </div>
    );
  };

  interface ProjectProps {
    title: string;
    tasks: string[];
  }
  const Project = ({ tasks, title }: ProjectProps) => {
    return (
      <div className="flex flex-col gap-2 w-1/4 flex-auto max-w-96 text-light-text dark:text-dark-text">
        <TitleForExperience title={title} />
        <ul className="flex flex-col gap-2">
          {tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    );
  };

  const changeSkillText = useCallback(() => {
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
  }, [changeSkillText]);

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-light-primary dark:bg-dark-primary">
      <Header />
      <SectionWrapper>
        <div className="w-3/4 flex items-center justify-between mt-36">
          <div className="w-1/2 gap-9 flex flex-col justify-around items-start">
            <h1 className="text-2xl text-light-text dark:text-light-primary">
              Desenvolvedor Frontend | React | Next.js | Typescript | Scrum
              Master | Analista de Projetos | Pós Junior
            </h1>
            <p className="text-xl text-light-text dark:text-light-primary">
              Oii. Tudo bem? Me chamo Marcos, mas pode me chamar de Marcante!
              <br />
              <br />
              Sou um entusiasta de tecnologia, inovação e de como podemos
              transformar ideias em soluções de alto impacto, resolvendo
              problemas, aprimorando processos e impactando pessoas, contextos e
              a sociedade.
            </p>
            <div className="w-1/2 flex items-start justify-start gap-5">
              <a
                href="/CURRÍCULO-2024.pdf"
                download
                className="w-32 bg-dark-highlight h-9 rounded-2xl text-dark-primary hover:text-dark-text transition-all flex justify-center items-center"
              >
                Meu currículo
              </a>

              <Link
                href={"https://www.linkedin.com/in/marcos-antonio-vital-lima/"}
                className="border-2 border-light-text dark:border-dark-text rounded-3xl p-2"
                target="_blank"
              >
                <Image
                  src={theme === "dark" ? LinkedInDark : LinkedInLight}
                  alt="ícone do linkedin"
                />
              </Link>

              <Link
                className="border-2 border-light-text dark:border-dark-text rounded-3xl p-2"
                href={"https://github.com/marcoslima12"}
                target="_blank"
              >
                <Image
                  src={theme === "dark" ? GithubDark : GithubLight}
                  alt="ícone do github"
                />
              </Link>
            </div>
          </div>
          <Image src={ProfilePic} alt="Foto de perfil de Marcos Antonio" />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex items-center flex-col justify-normal gap-3">
          <h1 className="text-4xl text-light-text dark:text-dark-text">
            &lt;Um desenvolvedor{" "}
            <span className="text-dark-highlight">{currentText}</span> /&gt;
          </h1>
          <p className="w-1/3 text-center text-xl text-light-text dark:text-dark-text">
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
            about="Sou responsável pelo desenvolvimento frontend dos projetos utilizando tecnologias como React, React Native e Flutter.
            Participo da construção das soluções, estando presente ativamente desde as etapas mais inicias do projeto e do produto, 
            como na definição de stack, arquitetura da aplicação, elicitação de requisitos e criação de User Stories.
            Também, realizo testes de usabilidade do protótipo e as diferentes validações necessárias com os stakeholders.
           
            
            Ainda, atuo também como Scrum Master do time, conduzindo reuniões importantes de planning, daily e retrospective, 
            guiando o time a seguir os princípios ágeis do Scrum, além de colaborar fortemente na gestão do backlog.
          "
            company="LIVE (Laboratório para Cidades Inteligentes)"
            role="Desenvolvedor Frontend | Scrum Master"
            time="Abril de 2024 até o momento"
            skills={[
              "React",
              "React Native",
              "Typescript",
              "API Rest",
              "Flutter",
              "Dart",
              "Scrum",
              "UX/UI",
              "Gerenacimento de Projetos",
              "Agile",
            ]}
          />{" "}
          <WorkExperience
            about="Desenvolvimento de aplicação web que liga estudantes, professores, comunidades e escolas na busca do melhor 
            processo de aprenzidado, utilizando diversos dados e métricas."
            company="Educação"
            role="Desenvolvedor Frontend [Freelancer]"
            time="Dezembro de 2023 até o momento"
            skills={[
              "React",
              "Typescript",
              "React Query",
              "API Rest",
              "Chackra UI",
              "SOLID",
              "Firebase",
              "",
            ]}
          />{" "}
          <WorkExperience
            about="Fui responsável por buscar garantir o sucesso do desenvolvimento de software através da elaboração e gestão do backlog 
            de atividades e na supervisão contínua de todas as etapas deste processo. 
            Minha abordagem se baseu em metodologias ágeis como Scrum e Kanban, o que me permitiu coordenar as equipes de forma eficaz.
            Além disso, era apoio técnico para o squad, garantindo que desafios fossem superados e que as melhores práticas fossem seguidas
            ao longo do desenvolvimento. 
            
            Minha atuação se estendeu à coordenação dos escopos, prazos e entregáveis, em estreita colaboração com os clientes e o time, 
            com o objetivo de assegurar não apenas uma experiência de alta qualidade, mas também resultados excepcionais"
            company="CITi (Centro Integrado de Tecnologia da Informação)"
            role="Gerente de Software"
            time="Dezembro de 2022 até dezembro de 2023"
            skills={[
              "Scrum",
              "Gerenciamento de Projetos",
              "Liderança",
              "Gestão de Riscos",
              "Kanban",
              "Agile",
              "React",
              "Typescript",
              "Next.Js",
              "Node.Js",
            ]}
          />{" "}
          <WorkExperience
            about="Atuei no desenvolvimento de sistemas web responsivos,
                  trabalhando no frontend como também no backend.

                  Minha trajetória inclui a utilização de tecnologias como React,
                  Next.js, Git, Github, TypeScript, Express, Prisma e Docker.

                  Tive uma jornada no desenvolvimento web que me capacitou a
                  transformar designs em produtos finais de alta qualidade,
                  combinando criatividade e conhecimento técnico de maneira
                  eficaz."
            company="CITi (Centro Integrado de Tecnologia da Informação)"
            role="Desenvolvedor Fullstack"
            time="Julho de 2022 até dezembro de 2022"
            skills={[
              "React",
              "Typescript",
              "Bibliotecas de componentes",
              "Next.Js",
              "API Rest",
              "Node.Js",
              "Express",
              "Prisma",
              "Docker",
            ]}
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

      <SectionWrapper>
        <div className="w-3/4 flex flex-col">
          <SectionTitle title="Projetos que já desenvolvi" />
          <div className="flex justify-start items-start gap-24 flex-wrap">
            <Project
              tasks={[
                "Implementei a emissão de certificados em PDF após conclusão de um curso interno.",
              ]}
              title="CITi+"
            />
            <Project
              tasks={[
                "Desenvolvi aplicação web para gerenciamento de cursos e disciplinas.",
                "Implementei acompanhamento de estudantes baseado em seus desempenhos, contendo comparativos e rankings, além de diversas outras métricas.",
                "Contribui na implementação de um gerador de questões por assunto utilizando Gemini do Google.",
              ]}
              title="Web Educação"
            />
            <Project
              tasks={[
                "Desenvolvi uma aplicação web fullstack voltada pra conexão entre compradores, corretores e imobiliária.",
              ]}
              title="Web Imóveis"
            />
            <Project
              tasks={[
                "Desenvolvi aplicativo com Flutter.",
                "Autenticação social com Google no Firebase.",
                "Google ML Kit para escanear código de barras de boletos.",
              ]}
              title="Payflow"
            />
            <Project
              tasks={[
                "Desenvolvi aplicação web utilizando Next.Js.",
                "Utilização de Server Side Rendering para consumo de dados e informações.",
                "Simulador de compra de produto utilizando o modo Teste do Stripe.",
              ]}
              title="Next.Js Shop"
            />
            <Project
              tasks={[
                "Projeto de curso para aprofundamento em gestão de estados no React.",
                "Utilização de Redux para gerenciar o estado da aplicação",
                "Simulação de servidor com Json Server.",
              ]}
              title="Redux Video Classes"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
