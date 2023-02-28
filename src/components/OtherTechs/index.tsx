import { SiAmazonaws, SiAwsamplify, SiDocker, SiJavascript, SiPrisma } from 'react-icons/si';
import TechCard from '../TechCard/index';
import {motion} from 'framer-motion'

export default function OtherTechs() {
  return (
    <motion.div 
        animate={{ y: 10  }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
       className='flex w-[100%] items-center justify-center mt-3'
      >
      <TechCard className='mr-3'>
        <TechCard.Icon>
          <SiJavascript size={40} />
        </TechCard.Icon>

        <TechCard.Title>
          Javascript
        </TechCard.Title>
      </TechCard>

      <TechCard className='mr-3'>
        <TechCard.Icon>
          <SiDocker size={40} />
        </TechCard.Icon>

        <TechCard.Title>
          Docker
        </TechCard.Title>
      </TechCard>

      <TechCard className='mr-3'>
        <TechCard.Icon>
          <SiAmazonaws size={40} />
        </TechCard.Icon>

        <TechCard.Title>
          AWS
        </TechCard.Title>
      </TechCard>

      <TechCard className='mr-3'>
        <TechCard.Icon>
          <SiPrisma size={40} />
        </TechCard.Icon>

        <TechCard.Title>
          Prisma
        </TechCard.Title>
      </TechCard>
    </motion.div>
  )
}