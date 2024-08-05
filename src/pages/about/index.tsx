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
      <div className="w-3 h-3 rounded-full dark:dark">{dots}</div>
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
    <div className="bg-light-primary dark:bg-dark-primary h-screen">
      <Header />
      <SectionWrapper>
        <div className="w-full flex items-center justify-center gap-32 mt-56">
          <div className="w-1/3">
            <Slider className="rounded-lg flex flex-col justify-center" {...sliderSettings}>
              {images.map((image, index) => {
                return (
                  <div key={index} className="p-1 flex flex-important justify-center">
                    <Image
                      src={image}
                      alt="Foto do carrosel"
                      className="rounded-lg w-auto h-[500px] box-border shadow shadow-dark-primary"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="flex flex-col w-80 gap-10">
            <h1 className="text-7xl font-bold text-left text-light-text dark:text-dark-text">Quem sou eu?</h1>
            <p className="text-xl text-light-text dark:text-dark-text">
              Também chamado de{" "}
              <span className="text-dark-highlight font-bold">Marcante</span>,
              sou filho de Antônio e Rosineide.
              <br />
              Natural de Timbaúba, interior de Pernambuco, sou fã de música e
              apaixonado por conexões e experiências. 
              Gosto de praticar corrida, andar e bicicleta e fazer academia, além de cantar e desenhar.
              Na verdade, faço de tudo um pouco, mesmo que não seja o melhor naquilo. Acredito que bom mesmo é experimentar.
              Por isso, me considero um
              <span className="text-dark-highlight font-bold">
                {" "}
                experimentador da vida
              </span>
              .
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
