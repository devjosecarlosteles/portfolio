import joseCircleSm from "../../assets/jose-circle-sm.png";
import TechCard from "../../components/TechCard";
import { SiNestjs, SiPostgresql } from "react-icons/si";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoLogoNodejs,
  IoMdArrowDown,
} from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { useEffect, useState } from "react";
import OtherTechs from "../../components/OtherTechs";
import experiences from "../../data/experiences.json";
import ExperiencesCarousel from "../../components/ExperiencesCarousel/index";
import Contacts from "../../components/Contacts";
import Technologies from "./components/technologies";
import RecommendationCard from "../../components/RecommendationCard";
import recommendations from "../../data/recommendations.json";
import { FaUserTie, FaUserCog, FaUserFriends } from "react-icons/fa";

function Home() {
  const [showOtherTechs, setShowOtherTechs] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsLargeScreen(true);
    }
  }, []);

  return (
    <div className="bg-black bg-gradient-to-b from-black via-gray-900 to-green-900 w-full min-h-screen text-white overflow-x-hidden ">
      <div className="bg-code bg-no-repeat w-full h-[20vh] pt-[90px] lg:bg-codeLarger bg-100% lg:h-[16vh]">
        <div className="flex w-full justify-between text-white items-center lg:justify-start max-w-screen-lg mx-auto px-4 lg:px-10">
          <div className="lg:h-[300px] lg:w-[100px]">
            <img
              src={joseCircleSm}
              className="w-[100px] h-[100px]"
              alt="imagem de josé carlos teles"
            />
          </div>
          {/* <img src={joseCircleLg} className='max-sm:hidden w-[200px] h-[200px]' alt='imagem de josé carlos teles' /> */}
          <div className="flex">
            <div className="flex flex-col items-end lg:items-start lg:ml-2 lg:mt-10 lg:h-[300px]">
              <h1 className="font-bold font-poppins text-2xl">
                José Carlos Teles
              </h1>
              <h2>fullstack developer</h2>
              <span className="text-green-700">
                devjosecarlosteles@gmail.com
              </span>

              <p className="max-md:hidden w-[600px] lg:text-lg">
                Olá sou José Carlos Teles, desenvolvedor fullstack, atualmente
                trabalho como <strong>Desenvolvedor Backend</strong> e{" "}
                <strong>Mentor</strong> de programação, fui finalista do Show Me
                The Code, primeiro reality de programação da América Latina.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto px-4">
          <p className="pt-2 lg:pl-[7%] md:hidden">
            Olá sou José Carlos Teles, desenvolvedor fullstack, atualmente
            trabalho como <strong>Desenvolvedor Backend</strong> e{" "}
            <strong>Mentor</strong> de programação, fui finalista do Show Me The
            Code, primeiro reality de programação da América Latina.
          </p>

          <Technologies showOtherTechs={showOtherTechs} />

          <div className="flex lg:hidden items-center justify-center w-full">
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

  <div className="w-full max-w-[1000px] mx-auto">
    <ExperiencesCarousel experiences={experiences} />
  </div>

          <h2 className="pt-8 font-bold mb-2 lg:text-[1.4rem]">Recomendações</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {recommendations.map((rec, index) => {
              const icons = [
                <FaUserTie key="tie" />,
                <FaUserCog key="cog" />,
                <FaUserFriends key="friends" />,
              ];

              return (
                <RecommendationCard
                  key={rec.name}
                  name={rec.name}
                  role={rec.role}
                  text={rec.text}
                  icon={icons[index % icons.length]}
                />
              );
            })}
          </div>


          <div className="flex justify-center mt-10 mb-4">
            <button
              className="rounded-full p-2 text-sm font-bold  bg-transparen lg:w-[140px]  text-green-500 hover:border-green-500 hover:border-2 hover:text-white"
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

          <footer className="w-[100%] flex justify-center">
            <a
              href="https://www.instagram.com/devjosecarlosteles"
              className="text-gray-300"
            >
              desenvolvido com ❤️ por José Carlos Teles
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
