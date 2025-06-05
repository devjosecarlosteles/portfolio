import { useState } from "react";
import { cutStringAndAddEllipsis } from "../../../../core/utils/string.utils";

interface ExperienceCardDescriptionProps {
  text: string;
}

export default function ExperienceCardDescription({ text }: ExperienceCardDescriptionProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = text.length > 160;
  const displayedText = expanded ? text : cutStringAndAddEllipsis(text, 160);

  return (
    <p className="whitespace-pre-line w-[300px]">
      {displayedText}
      {shouldTruncate && (
        <span
          onClick={() => setExpanded(!expanded)}
          className="text-green-400 cursor-pointer ml-1"
        >
          {expanded ? " Ler menos" : " Ler mais"}
        </span>
      )}
    </p>
  );
}
