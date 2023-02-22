import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AddonsStyle } from "./Styles/AddOns.styled";
import AddOnsData from "./AddOnsData";
import React from "react";
import { useContext } from "react";
import { FormDataContext } from "./FormDataContext";

const AddOns = () => {
  const { selectedAddons, setSelectedAddons } = useContext(FormDataContext);
  console.log(selectedAddons);
  const [addons, setAddons] = React.useState(AddOnsData);

  const handleChange = (index) => {
    const newData = [...addons];
    newData[index].isSelcted = !newData[index].isSelcted;
    setAddons(newData);
    const filteredAddons = addons.filter((item) => {
      return item.isSelcted === true;
    });
    setSelectedAddons(filteredAddons);
  };

  const navigate = useNavigate();
  const handleAddonsNextClick = () => {
    navigate("/total");
  };

  const addonArr = addons.map((item, index) => {
    return (
      <div key={index} className={item.isSelcted ? "selected" : null}>
        <input
          type="checkbox"
          onChange={() => handleChange(index)}
          checked={item.isSelcted}
        />
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <span>+${item.month}/mo</span>
      </div>
    );
  });

  return (
    <AddonsStyle>
      <h2>Pick add-ons</h2>
      <span>Add-ons help enhance your gaming experience.</span>
      <div className="addonsContainer">{addonArr}</div>
      <div className="addonsBottom">
        <Link to="/plan">Go Back</Link>
        <button onClick={handleAddonsNextClick}>Next step</button>
      </div>
    </AddonsStyle>
  );
};

export default AddOns;
