import React from "react";
import { PersonlStyle } from "./Styles/Personal.styled";
import { useContext } from "react";
import { FormDataContext } from "./FormDataContext";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const { personalData, setPersonalData } = useContext(FormDataContext);

  const handleChange = (e) => {
    setPersonalData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const navigate = useNavigate();
  const handleClick = (e) => {
    const pattern =
      /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,14})(\.[a-z]{2,8})?$/g;
    if (personalData.name == "") {
      return;
    } else if (personalData.phone == "") {
      return;
    } else if (personalData.email.match(pattern)) {
      e.preventDefault();
      navigate("/plan");
      console.log(personalData);
    } else {
      e.preventDefault();
      return;
    }
  };

  return (
    <PersonlStyle>
      <h2>Personal info</h2>
      <span>Please provide your name, emeil address and phohe number.</span>
      <form>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          onChange={handleChange}
          required
          value={personalData.name}
        />
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          id="email"
          onChange={handleChange}
          value={personalData.email}
          type="email"
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          id="phone"
          onChange={handleChange}
          value={personalData.phone}
          required
        />
        <button onClick={handleClick}>Next Step</button>
      </form>
    </PersonlStyle>
  );
};

export default Personal;
