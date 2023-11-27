import joseCircleSm from "./assets/jose-circle-sm.png";
import joseCircleLg from "./assets/jose-circle-lg.png";
import TechCard from "./components/TechCard";
import { SiNestjs, SiPostgresql } from "react-icons/si";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoLogoNodejs,
  IoMdArrowDown,
} from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { useState } from "react";
import OtherTechs from "./components/OtherTechs";
import experiences from "./data/experiences.json";
import ExperiencesCarousel from "./components/ExperiencesCarousel/index";
import Contacts from "./components/Contacts";

function Home() {
  const [showOtherTechs, setShowOtherTechs] = useState<boolean>(false);

  return (
    <div className="bg-dark bg-gradient-to-b to-dark from-black w-[100vw] h-[100vh] text-white overflow-x-hidden ">
      <div className="bg-code bg-no-repeat w-[100vw] h-[20vh] pt-[90px] lg:bg-codeLarger bg-100% lg:h-[16vh]">
        <div className="flex w-[100%] ml-2 justify-between pr-4 text-white items-center lg:justify-start  lg:pl-10">
          <div className="lg:h-[300px] lg:w-[100px]">
            <img
              src={joseCircleSm}
              className="w-[100px] h-[100px]"
              alt="imagem de josé carlos teles"
            />
          </div>
          {/* <img src={joseCircleLg} className='max-sm:hidden w-[200px] h-[200px]' alt='imagem de josé carlos teles' /> */}

          <div className="flex flex-col items-end lg:items-start lg:ml-2 lg:mt-10 lg:h-[300px]">
            <h1 className="font-bold font-poppins text-2xl">
              José Carlos Teles
            </h1>
            <h2>fullstack developer</h2>
            <span className="text-green-700">devjosecarlosteles@gmail.com</span>

            <p className="max-md:hidden w-[600px] lg:text-lg">
              Olá sou José Carlos Teles, desenvolvedor fullstack, atualmente
              trabalho como <strong>Desenvolvedor Backend</strong> e{" "}
              <strong>Mentor</strong> de programação, fui finalista do Show Me
              The Code, primeiro reality de programação da América Latina.
            </p>
          </div>
        </div>

        <div className="pl-4">
          <p className="pt-2 lg:pl-[7%] md:hidden">
            Olá sou José Carlos Teles, desenvolvedor fullstack, atualmente
            trabalho como <strong>Desenvolvedor Backend</strong> e{" "}
            <strong>Mentor</strong> de programação, fui finalista do Show Me The
            Code, primeiro reality de programação da América Latina.
          </p>

          <div className="lg:flex lg:flex-col lg:justify-start lg:items-start">
            <h2 className="pt-4 font-bold mb-2 lg:text-[1.4rem]">
              Tecnologias
            </h2>

            <div className="flex items-center justify-center flex-wrap">
              <TechCard className="mr-1">
                <TechCard.Icon>
                  <SiNestjs size={40} />
                </TechCard.Icon>

                <TechCard.Title>Nest.JS</TechCard.Title>
              </TechCard>

              <TechCard className="mr-1">
                <TechCard.Icon>
                  <IoLogoNodejs size={40} />
                </TechCard.Icon>

                <TechCard.Title>Node.JS</TechCard.Title>
              </TechCard>

              <TechCard className="mr-1">
                <TechCard.Icon>
                  <SiTypescript size={40} />
                </TechCard.Icon>

                <TechCard.Title>Typescript</TechCard.Title>
              </TechCard>

              <TechCard className="mr-1">
                <TechCard.Icon>
                  <SiPostgresql size={40} />
                </TechCard.Icon>

                <TechCard.Title>PostgresSQL</TechCard.Title>
              </TechCard>

              <div className="max-md:hidden mb-8">
                <OtherTechs />
              </div>
              {showOtherTechs ? <OtherTechs /> : null}
            </div>
          </div>

          <div className="flex lg:hidden items-center justify-center w-[100vw]">
            {showOtherTechs ? (
              <IoIosArrowUp
                onClick={() => setShowOtherTechs(!showOtherTechs)}
                className="mr-6 mt-2"
              />
            ) : (
              <IoIosArrowDown
                onClick={() => setShowOtherTechs(!showOtherTechs)}
                className="mr-6 mt-2"
              />
            )}
          </div>

          <h2 className="pt-4 font-bold mb-2 lg:text-[1.4rem]">Experiências</h2>

          <div className="w-[1000px] lg:w-[100vw]">
            <ExperiencesCarousel experiences={experiences} />
          </div>

          <h2 className="pt-4 font-bold mb-2">Projetos</h2>

          <h3>Em breve...</h3>

          <div className="flex justify-center mt-10 mb-4">
            <button
              className="rounded-3xl p-2 w-[70%] shadow-lg shadow-green-300/30 font-bold bg-gradient-to-tl from-teal-900 via-emerald-800 to-green-600 lg:w-[300px]"
              onClick={() =>
                (window.location.href =
                  "https://api.whatsapp.com/send?phone=5511992407129&text=Ola")
              }
            >
              Entre em contato
            </button>
          </div>

          <div className="w-[100%] items-center flex justify-center mb-6 mt-2">
            <Contacts />
          </div>

          <div className="w-[100%] items-center flex justify-center">
            <span className="text-gray-300">
              desenvolvido com 💚 por{" "}
              <a href="https://www.github.com/devjosecarlosteles">
                José Carlos Teles
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
