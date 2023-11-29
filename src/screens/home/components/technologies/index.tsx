import { SiNestjs, SiPostgresql, SiTypescript } from "react-icons/si";
import TechCard from "../../../../components/TechCard";
import { IoLogoNodejs } from "react-icons/io";
import OtherTechs from "../../../../components/OtherTechs";
import { useEffect } from "react";

interface TechnologiesProps {
  showOtherTechs: boolean;
  hiddenInLargeScreen?: boolean;
}

export default function Technologies({
  showOtherTechs,
  hiddenInLargeScreen,
}: TechnologiesProps) {
  return (
    <div
      className={`lg:flex lg:flex-col lg:justify-start lg:items-start ${
        hiddenInLargeScreen ? "lg:hidden" : ""
      }`}
    >
      <h2 className="pt-4 font-bold mb-2 lg:text-[1.4rem]">Tecnologias</h2>

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
  );
}
