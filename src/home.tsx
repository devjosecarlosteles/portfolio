import joseCircleSm from './assets/jose-circle-sm.png';
import TechCard from './components/TechCard';
import { SiJavascript, SiNestjs, SiPostgresql } from 'react-icons/si'
import { IoIosArrowDown, IoIosArrowUp, IoLogoNodejs, IoMdArrowDown } from 'react-icons/io'
import { SiTypescript } from 'react-icons/si'
import { useState } from 'react';
import OtherTechs from './components/OtherTechs';
import experiences from './data/experiences.json';
import ExperienceCard from './components/ExperienceCard';

function Home() {
  const [showOtherTechs, setShowOtherTechs] = useState<boolean>(false);

  return (
    <div className="bg-dark w-[100vw] h-[100vh] text-white overflow-x-hidden">
       <div className='bg-code bg-no-repeat w-[100vw] h-[20vh] pt-[90px] w-screen'>
          <div className='flex w-[100%] ml-2 justify-between pr-4 text-white items-center'>
            <img src={joseCircleSm} className='w-[100px] h-[100px]' alt='imagem de josé carlos teles' />
            
            <div className="flex flex-col items-end">
              <h1 className='font-bold font-poppins text-2xl'>José Carlos Teles</h1>
              <h2>fullstack developer</h2>
              <span className='text-green-700'>devjosecarlosteles@gmail.com</span>
            </div>
          </div>

          <div className='pl-4'>
            <p className='pt-2'>
              Olá sou José Carlos Teles, desenvolvedor fullstack, 
              atualmente trabalho como <strong>Desenvolvedor Backend</strong> e <strong>Mentor</strong> de programação, fui finalista do Show Me The Code, primeiro reality de programação da América Latina.
            </p>

            <h2 className='pt-4 font-bold mb-2'>Tecnologias</h2>

            <div className='flex items-center justify-center flex-wrap'>
              <TechCard className='mr-3'>
                <TechCard.Icon>
                  <SiNestjs size={40} />
                </TechCard.Icon>
                
                <TechCard.Title>Nest.JS</TechCard.Title>
              </TechCard>

              <TechCard className='mr-3'>
                <TechCard.Icon>
                  <IoLogoNodejs size={40} />
                </TechCard.Icon>
                
                <TechCard.Title>Node.JS</TechCard.Title>
              </TechCard>

              <TechCard className='mr-3'>
                <TechCard.Icon>
                  <SiTypescript size={40} />
                </TechCard.Icon>
                
                <TechCard.Title>Typescript</TechCard.Title>
              </TechCard>

              <TechCard className='mr-3'>
                <TechCard.Icon>
                  <SiPostgresql size={40} />
                </TechCard.Icon>
                
                <TechCard.Title>PostgresSQL</TechCard.Title>
              </TechCard>
              { showOtherTechs ? <OtherTechs/> : null }
            </div>
            <div className='flex items-center justify-center w-[100vw]'>
              { showOtherTechs 
                ?  <IoIosArrowUp 
                      onClick={() => setShowOtherTechs(!showOtherTechs)} 
                      className='mr-6 mt-2' 
                    /> 
                : <IoIosArrowDown 
                      onClick={() => setShowOtherTechs(!showOtherTechs)} 
                      className='mr-6 mt-2' 
                  />
              }
            </div>
            
            <h2 className='pt-4 font-bold mb-2'>Experiências</h2>

            <div className='flex'>
              { experiences.map(experience => (
                  <ExperienceCard 
                    companyName={ experience.company } 
                    position={ experience.position } 
                    start_date={ experience.start_date } 
                    end_date={ experience.end_date }
                  >
                    <ExperienceCard.Description>
                      { experience.description }
                    </ExperienceCard.Description>
                  </ExperienceCard>   
                )) 
              }
            </div>

            <h2 className='pt-4 font-bold mb-2'>Projetos</h2>

            
          </div>
       </div>
    </div>
  )
}

export default Home
