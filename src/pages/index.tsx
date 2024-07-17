import { useEffect, useState } from "react";
import { Github, LinkedIn, ProfilePic } from "@/assets";
import { Header } from "@/components";
import { roboto } from "@/styles/fonts/fonts";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [currentText, setCurrentText] = useState("criativo");
  const texts = ["criativo", "comunicativo", "proativo", "resiliente"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 1000); // Muda a cada 2 segundos

    return () => clearInterval(interval);
  }, [texts]);

  interface softSkillProp {
    text: string;
  }

  const SoftSkill = ({ text }: softSkillProp) => {
    return <span className="font-bold">{text}</span>;
  };

  return (
    <div>
      <Header />

      <div className="w-full  pt-16 pb-8 container mx-auto flex items-center justify-center">
        <div className="  w-3/4 flex items-center justify-between">
          <div className=" w-1/2 gap-9  flex flex-col justify-around items-start">
            <h1 className="text-2xl  ">
              Desenvolvedor Frontend | React | Next.js | Typescript | Scrum
              Master | Analista de Projetos | Pós Junior
            </h1>
            <p className="text-xl">
              Oii. Tudo bem? Me chamo Marcos, mas pode me chamar de Marcante!
              <br />
              <br />
              Sou um entusiasta de tecnologia, inovação e de como podemos
              transformar ideias em soluções de alto impacto, solucionando
              problemas, aprimorando processos e impactandos pessoas e
              contextos.
            </p>
            <div className=" w-1/2 flex items-start justify-start gap-5">
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
                {" "}
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
      </div>

      <div className=" w-full  pt-8 pb-8 container mx-auto flex items-center justify-center">
        <div className=" flex items-center flex-col justify-normal gap-3">
          <h1 className="text-4xl">
            &lt;Um desenvolvedor{" "}
            <span className="text-dark-highlight">{currentText}</span> /&gt;
          </h1>
          <p className=" w-1/3 text-center text-xl">
            Além de habilidades técnicas, trago em minha bagagem diversas
            habilidades interpessoais, como <SoftSkill text="boa comunicação" />
            , <SoftSkill text="liderança eficaz" /> ,{" "}
            <SoftSkill text="resolução de conflitos" />,{" "}
            <SoftSkill text="pensamento crítico" /> e{" "}
            <SoftSkill text="trabalho em equipe" />, que adquiri nas minhas
            diversas experiências.
          </p>
        </div>
      </div>
    </div>
  );
}
