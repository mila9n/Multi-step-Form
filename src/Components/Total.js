import { TotalStyle } from "./Styles/Total.styled";
import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { FormDataContext } from "./FormDataContext";

const Total = () => {
  const { selectedPlan, selectedAddons, duration } =
    useContext(FormDataContext);

  const plan = selectedPlan;
  const addons = selectedAddons;

  const [paymentPeriod, setPaymentPeriod] = React.useState(duration);

  console.log(paymentPeriod);

  const totalPrice = () => {
    let totalamount = 0;
    let planPrice = paymentPeriod == "month" ? plan.month : plan.year;
    let addonPrice = 0;
    if (addons.length > 0) {
      addons.map((item) => {
        return (addonPrice +=
          paymentPeriod == "month" ? item.month : item.year);
      });
    }
    return (totalamount = planPrice + addonPrice);
  };

  const [total, setTotal] = React.useState(totalPrice());
  const handleChangeClick = () => {
    setPaymentPeriod((prevPeriod) =>
      prevPeriod == "month" ? "year" : "month"
    );
  };

  React.useEffect(() => {
    setTotal(totalPrice());
  }, [paymentPeriod]);

  const addonData = addons.map((item) => {
    return (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <span>
          {paymentPeriod == "month" ? `+${item.month}/mo` : `+${item.year}/yr`}
        </span>
      </div>
    );
  });

  return (
    <TotalStyle>
      <h2>Finishing up</h2>
      <span>Double-check everything looks OK before confirming</span>
      <div className="plan-type">
        <div>
          {plan.name}({paymentPeriod == "month" ? "Monthly" : "Yearly"})
          <span onClick={handleChangeClick}>change</span>
        </div>
        <div>
          {paymentPeriod == "month" ? `$${plan.month}/mo` : `$${plan.year}/yr`}
        </div>
      </div>
      {addons.length > 0 && <div className="addons">{addonData}</div>}
      <div className="total-price">
        <h3>Total ({paymentPeriod == "month" ? "per month" : "per year"})</h3>
        <span>
          {paymentPeriod == "month" ? `+$${total}/mo` : `+$${total}/yr`}
        </span>
      </div>
      <div className="totalBottom">
        <Link to="/addons">Go Back</Link>
        <button>Confirm</button>
      </div>
    </TotalStyle>
  );
};

export default Total;
