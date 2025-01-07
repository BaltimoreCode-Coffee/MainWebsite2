// This component takes text data with line breaks and reformats it into paragraph

import React from "react";

export default function FormattedDescription({ text, textClassName }) {
  const formattedText = text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      <span className={`${textClassName}-span`}>{line.trim()}</span>
    </React.Fragment>
  ));

  return <p className={textClassName}>{formattedText}</p>;
}
