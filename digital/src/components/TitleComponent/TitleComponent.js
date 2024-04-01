import React from "react";
import "../TitleComponent/TitleComponent.css";
const TitleComponent = ({
  title,
  spantext,
  successText,
  paragraph1,
  paragraph2,
}) => {
  return (
    <div className="title">
      <h3>
        {title} {spantext && <span className="bluetext">{spantext}</span>}{" "}
        {successText && <span>{successText}</span>}
      </h3>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
};

export default TitleComponent;
