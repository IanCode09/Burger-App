import React, { useState } from "react";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Burger from "../../Components/Burger/Burger";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Modal from "../../Components/UI/Modal/Modal";

const BurgerBuilder = () => {
  const INGREDIENT_PRICES = {
    salad: 1.5,
    bacon: 0.5,
    cheese: 2.7,
    meat: 1.3,
  };

  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    setPurchasable(sum > 0);
  };

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];

    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...ingredients,
    };

    updateIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;

    setIngredients(updateIngredients);
    setTotalPrice(newPrice);

    updatePurchaseState(updateIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...ingredients,
    };

    updateIngredients[type] = updateCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceDeduction;

    setIngredients(updateIngredients);
    setTotalPrice(newPrice);

    updatePurchaseState(updateIngredients);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const disabledInfo = {
    ...ingredients,
  };

  const purchaseContinueHandler = () => {
    console.log("Bayar");
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          price={totalPrice}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
        />
      </Modal>

      <Burger ingredients={ingredients} />

      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        purchasable={purchasable}
        price={totalPrice}
        ordered={purchaseHandler}
      />
    </>
  );
};

export default BurgerBuilder;
