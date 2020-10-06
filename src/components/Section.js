import React from "react";

export default function Section({ sections }) {
  return (
    <ol>
      <h4>Sections</h4>
      {sections.reverse().map((section) => (
        <li>
          <h4>{section.sectionName}</h4>
          <p>{section.sectionDescription}</p>
        </li>
      ))}
    </ol>
  );
}
