import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  price,
  purchaseCancelled,
  purchaseContinued,
}) => {
  const ingredientsSummary = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey}: {ingredients[igKey]}
        </span>
      </li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p style={{ fontWeight: "bold" }}>Total Price: {price.toFixed(2)}</p>
      <p>Continue to Checkout ?</p>
      <Button btnType='Danger' clicked={purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={purchaseContinued}>
        CONTINUES
      </Button>
    </div>
  );
};

export default OrderSummary;
