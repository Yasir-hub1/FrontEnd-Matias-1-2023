import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

// import Card from "../Card/Card";
import CardProduct from "../Card/CardProduct";
const Cards = () => {
  return (
    <div className="Cards">

      <div className="parentContainer">
        <CardProduct
        />
      </div>

    </div>
  );
};

export default Cards;
