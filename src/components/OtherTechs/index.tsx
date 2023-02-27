import { SiAmazonaws, SiAwsamplify, SiDocker, SiJavascript, SiPrisma } from 'react-icons/si';
import TechCard from '../TechCard/index';
export default function OtherTechs() {
  return (
    <div className='flex w-[100%] items-center justify-center mt-3'>
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
    </div>
  )
}