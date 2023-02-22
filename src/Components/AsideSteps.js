import React from "react";
import { useLocation } from "react-router-dom";

const AsideSteps = (props) => {
  const pathName = useLocation().pathname;
  console.log(pathName);

  return (
    <div>
      <div>
        <span className={props.path === pathName ? "selected" : null}>
          {props.id}
        </span>
      </div>
      <div>
        <h2>{props.step}</h2>
        <h3>{props.stepTitle}</h3>
      </div>
    </div>
  );
};

export default AsideSteps;
