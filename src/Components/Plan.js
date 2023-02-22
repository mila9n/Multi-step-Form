import PlansData from "./PlansData";
import React from "react";
import { PlanStyle, ToggleStyle } from "./Styles/Plan.styled";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormDataContext } from "./FormDataContext";

const Plan = () => {
  const { selectedPlan, setSelectedPlan, setDuration, duration } =
    useContext(FormDataContext);
  const [plans, setPlans] = React.useState(PlansData);

  const handleClick = (e) => {
    const newPlan = [...plans];
    for (let plan of plans) {
      plan.isSelected = false;
    }
    plans[e.target.id].isSelected = !plans[e.target.id].isSelected;
    setPlans(newPlan);
    setSelectedPlan(plans[e.target.id]);
  };

  const handlePlanClick = () => {
    setDuration((prevDuration) => (prevDuration == "month" ? "year" : "month"));
    const newPlan = [...plans];
    for (let plan of plans) {
      plan.isSelected = false;
    }
    setPlans(newPlan);
    setSelectedPlan("");
  };

  const navigate = useNavigate();
  const handlePlanNextClick = () => {
    if (selectedPlan == "") {
      console.log("plese select the plan");
      return;
    } else {
      navigate("/addons");
    }
  };

  const plansArr = plans.map((item, index) => {
    return (
      <div
        key={item.id}
        onClick={handleClick}
        className={item.isSelected ? "selected" : null}
      >
        <img src={item.img} />
        <h4>{item.name}</h4>
        <h5>${duration == "month" ? item.month + "/Mo" : item.year + "/Yr"}</h5>
        <div id={index}></div>
      </div>
    );
  });

  return (
    <PlanStyle>
      <h2>Select your plan</h2>
      <span>You have the option or yearly billing.</span>
      <div>{plansArr}</div>
      <ToggleStyle>
        <div>
          <span className={duration == "month" ? "bold" : null}>Monthly</span>
          <div className="cylinder">
            <div
              className={duration == "year" ? "ball yearly" : "ball"}
              onClick={handlePlanClick}
            ></div>
          </div>
          <span className={duration == "year" ? "bold" : null}>Yearly</span>
        </div>
      </ToggleStyle>
      <div className="planBottom">
        <Link to="/">Go Back</Link>
        <button onClick={handlePlanNextClick}>Next step</button>
      </div>
    </PlanStyle>
  );
};

export default Plan;
