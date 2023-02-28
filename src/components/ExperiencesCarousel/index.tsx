import { motion } from 'framer-motion';
import ExperienceCard from '../ExperienceCard/index';
import { useEffect, useRef, useState } from 'react';

interface ExperiencesCarouselProps {
  experiences: any[];
}

export default function ExperiencesCarousel ({ experiences }: ExperiencesCarouselProps) {
  const carousel = useRef<any>()
  const [ width, setWidth ] = useState(0)
  
  useEffect(() => {
    console.log(-width - (width / 2))
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
  }, [width])
  return (
    <motion.div 
      className='cursor-grab overflow-hidden w-[100%]' 
      ref={carousel}
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div 
        dragConstraints={{ right: 0, left: -width - (width / 2) }}
        drag="x" 
        className='flex'
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {experiences.map((experience) => (
          <ExperienceCard 
              companyName={ experience.company } 
              position={ experience.position } 
              start_date={ experience.start_date } 
              end_date={ experience.end_date }
            >
              <ExperienceCard.Description>
                { experience.description }
              </ExperienceCard.Description>

              <ExperienceCard.Technologies technologies={experience.technologies} />
            </ExperienceCard>    
        
        ))}
      </motion.div>
      
    </motion.div>
  );  
}