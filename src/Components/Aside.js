import React from "react";
import { AsideStyle } from "./Styles/aside.styled";
import AsideData from "./AsideData";
import AsideSteps from "./AsideSteps";

const Aside = () => {
  const [asideData, setAsideData] = React.useState(AsideData);

  const asideMapped = asideData.map((item) => {
    return (
      <AsideSteps
        id={item.id}
        step={item.step}
        stepTitle={item.stepTitle}
        path={item.path}
        key={item.id}
      />
    );
  });

  const [currentWidth, setCurrentWidth] = React.useState(window.outerWidth);
  const handleScreenChange = () => {
    setCurrentWidth(window.outerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleScreenChange);
    return () => {
      window.removeEventListener("resize", handleScreenChange);
    };
  }, [window.outerWidth]);

  const image =
    currentWidth > 700
      ? "./images/bg-sidebar-desktop.svg"
      : "./images/bg-sidebar-mobile.svg";

  return (
    <AsideStyle>
      <img src={image} />
      <div>{asideMapped}</div>
    </AsideStyle>
  );
};

export default Aside;
