import { Header } from "@/components";
import { SectionWrapper } from "@/components/SectionWrapper";
import Slider from "react-slick";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  Car1,
  Car2,
  Car3,
  CarouselImage,
  LogoDark,
  ProfilePic,
  ThemeIcon,
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
      <div className="w-3 h-3 bg-white rounded-full">{dots}</div>
    ),
  };

  const images = [Car1, Car2, Car3];

  return (
    <>
      <Header />
      <SectionWrapper>
        <div className="w-full flex items-center justify-center gap-32 mt-56">
          <div className="w-1/3">
            <Slider className="rounded-lg" {...sliderSettings}>
              {images.map((image, index) => {
                return (
                  <div key={index} className="p-1">
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
            <h1 className="text-7xl font-bold text-left">Quem sou eu?</h1>
            <p className="text-xl">
              Também chamado de{" "}
              <span className="text-dark-highlight font-bold">Marcante</span>,
              sou filho de Antônio e Rosineide.
              <br />
              Natural de Timbaúba, interior de Pernambuco, sou fã de música e
              apaixonado por conexões e experiências. Por isso, me considero um
              <span className="text-dark-highlight font-bold">
                {" "}
                experimentador da vida
              </span>
              .
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
