import { useState } from "react";
import type { ReactNode } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded || !(maxChars && children.length > maxChars!)
    ? children
    : children.substring(0, maxChars) + "...";

  return (
    <div>
      <p>{displayText}</p>
      {maxChars! < children.length && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
