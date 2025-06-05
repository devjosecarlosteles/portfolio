import ExperienceCard from "../ExperienceCard";
import { useState } from "react";
import { cutStringAndAddEllipsis } from "../../core/utils/string.utils";
import Modal from "../Modal";
import moment from "moment";

interface ExperiencesCarouselProps {
  experiences: any[];
}

export default function ExperiencesCarousel({ experiences }: ExperiencesCarouselProps) {
  const [selectedExperience, setSelectedExperience] = useState<any | null>(null);

  const orderedExperiences = experiences.sort((a, b) => {
    const dateA: any = new Date(a.start_date.split("/").reverse().join("-"));
    const dateB: any = new Date(b.start_date.split("/").reverse().join("-"));
    return dateB - dateA;
  });

  return (
    <>
      <div className="relative pl-8">
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-green-700"></div>
        {orderedExperiences.map((experience) => (
          <div key={experience.company + experience.start_date} className="relative pb-8">
            <span className="absolute -left-3 top-5 w-3 h-3 bg-green-500 rounded-full"></span>
            <ExperienceCard
              companyName={experience.company}
              position={experience.position}
              start_date={experience.start_date}
              end_date={experience.end_date}
              onClick={() => setSelectedExperience(experience)}
            >
              <ExperienceCard.Description>
                {cutStringAndAddEllipsis(experience.description, 160)}
              </ExperienceCard.Description>
              <ExperienceCard.Technologies technologies={experience.technologies} />
            </ExperienceCard>
          </div>
        ))}
      </div>
      <Modal
        open={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
        title={
          selectedExperience
            ? `${selectedExperience.company} - ${selectedExperience.position}`
            : ""
        }
      >
        {selectedExperience && (
          <div className="mb-4 text-sm text-gray-300">
            {moment(selectedExperience.start_date, "DD/MM/YYYY").format("DD-MM-YYYY")}
            {selectedExperience.end_date && (
              <>
                {" - "}
                {moment(selectedExperience.end_date, "DD/MM/YYYY").format("DD-MM-YYYY")}
              </>
            )}
          </div>
        )}
        {selectedExperience?.description}
      </Modal>
    </>
  );
}
