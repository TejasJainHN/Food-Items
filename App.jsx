import React, { useState } from "react";
import Title from "./components/title";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  let texttoshow = "Food Item entered by user";


  const handleonchange= (event) => {
    console.log(event.target.value);

  };

  return (
    <>
      <Container>
        <Title></Title>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <Foodinput handleonchange={handleonchange}></Foodinput>
        <p>{texttoshow}</p>
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <p>Above is the list of items that are good for health</p>
      </Container>
    </>
  );
}

export default App;
