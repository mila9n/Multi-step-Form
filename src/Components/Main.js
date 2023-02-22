import React from "react";
import { MainStyle } from "./Styles/Main.styled";
import Aside from "./Aside";
import Personal from "./Personal";
import Plan from "./Plan";
import AddOns from "./AddOns";
import { Route, Routes } from "react-router-dom";
import Total from "./Total";
import { FormDataContext } from "./FormDataContext";

const Main = () => {
  const [personalData, setPersonalData] = React.useState({});
  const [selectedPlan, setSelectedPlan] = React.useState("");
  const [selectedAddons, setSelectedAddons] = React.useState("");
  const [duration, setDuration] = React.useState("month");

  return (
    <MainStyle>
      <Aside />
      <section>
        <FormDataContext.Provider
          value={{
            personalData,
            setPersonalData,
            selectedPlan,
            setSelectedPlan,
            selectedAddons,
            setSelectedAddons,
            duration,
            setDuration,
          }}
        >
          <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/addons" element={<AddOns />} />
            <Route path="/total" element={<Total />} />
          </Routes>
        </FormDataContext.Provider>
      </section>
    </MainStyle>
  );
};

export default Main;
