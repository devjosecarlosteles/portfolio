import { motion } from "framer-motion";
import ExperienceCard from "../ExperienceCard/index";
import { useEffect, useRef, useState } from "react";
import { cutStringAndAddEllipsis } from "../../core/utils/string.utils";
import Modal from "../Modal";

interface ExperiencesCarouselProps {
  experiences: any[];
}

export default function ExperiencesCarousel({
  experiences,
}: ExperiencesCarouselProps) {
  const carousel = useRef<any>();
  const [width, setWidth] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState<any | null>(
    null
  );
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [width]);

  const approximateCardSize: number = 280;

  return (
    <>
      <motion.div
        className="cursor-grab overflow-hidden w-[100%]"
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          dragConstraints={{
            right: 0,
            left: -approximateCardSize * experiences.length,
          }}
          drag="x"
          className="flex"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setTimeout(() => setIsDragging(false), 0)}
        >
          {experiences
            .sort((a, b) => {
              const dateA: any = new Date(
                a.start_date.split("/").reverse().join("-")
              );
              const dateB: any = new Date(
                b.start_date.split("/").reverse().join("-")
              );
              return dateB - dateA;
            })
            .map((experience) => (
              <ExperienceCard
                companyName={experience.company}
                position={experience.position}
                start_date={experience.start_date}
                end_date={experience.end_date}
                key={experience.company + experience.start_date}
                onClick={() => {
                  if (isDragging) return;
                  setSelectedExperience(experience);
                }}
              >
                <ExperienceCard.Description>
                  {cutStringAndAddEllipsis(experience.description, 160)}
                </ExperienceCard.Description>

                <ExperienceCard.Technologies
                  technologies={experience.technologies}
                />
              </ExperienceCard>
            ))}
        </motion.div>
      </motion.div>
      <Modal
        open={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
        title={
          selectedExperience
            ? `${selectedExperience.company} - ${selectedExperience.position}`
            : ""
        }
      >
        {selectedExperience?.description}
      </Modal>
    </>
  );
}
