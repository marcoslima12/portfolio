import { Header } from "@/components";
import { SectionWrapper } from "@/components/SectionWrapper";
import Slider from "react-slick";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  CarouselImage,
  CarouselImage1,
  CarouselImage10,
  CarouselImage11,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
  CarouselImage6,
  CarouselImage7,
  CarouselImage8,
  CarouselImage9,
} from "@/assets";
import { ReactNode } from "react";

type SliderTypes = {
  dot: ReactNode;
};

const About = ({ dot }: SliderTypes) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    centerPadding: "70px",
    appendDots: (dots: ReactNode) => (
      <div className="slick-dots w-3 h-3 rounded-full dark:dark">{dots}</div>
    ),
  };

  const images = [
    CarouselImage1,
    CarouselImage2,
    CarouselImage3,
    CarouselImage4,
    CarouselImage5,
    CarouselImage6,
    CarouselImage7,
    CarouselImage8,
    CarouselImage9,
    CarouselImage10,
    CarouselImage11,
  ];

  return (
    <div className="bg-light-primary lg:h-screen dark:bg-dark-primary">
      <Header />
      <div className="w-full lg:h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32">
        <div className="w-full lg:w-1/3 pt-24 lg:pt-0">
          <Slider
            className="rounded-lg flex flex-col justify-center"
            {...sliderSettings}
          >
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="p-1 flex flex-important justify-center"
                >
                  <Image
                    src={image}
                    alt="Foto do carrosel"
                    className="rounded-lg w-auto max-w-64 lg:max-w-[480px] h-[350px] lg:h-[500px] box-border shadow shadow-dark-primary"
                  />
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="flex flex-col w-80 gap-5 lg:gap-10 mb-6 lg:mb-0">
          <h1 className="text-3xl lg:text-7xl font-bold text-center  lg:text-left text-light-text dark:text-dark-text">
            Quem sou eu?
          </h1>
          <p className="text-base lg:text-xl text-light-text dark:text-dark-text text-center  lg:text-left px-4 lg:px-0">
            Também chamado de{" "}
            <span className="text-dark-highlight font-bold">Marcante</span>, sou
            filho de Antônio e Rosineide.
            <br />
            Natural de Timbaúba, interior de Pernambuco, sou fã de música e
            apaixonado por conexões e experiências. Gosto de praticar corrida,
            andar e bicicleta e fazer academia, além de cantar e desenhar. Na
            verdade, faço de tudo um pouco, mesmo que não seja o melhor naquilo.
            Acredito que bom mesmo é experimentar. Por isso, me considero um
            <span className="text-dark-highlight font-bold">
              {" "}
              experimentador da vida
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
