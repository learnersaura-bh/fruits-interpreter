import React, { useState } from "react";
import "./styles.css";
var fruitsList = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry"
};

var fruitsWeHave = Object.keys(fruitsList);

export default function App() {
  var [fruitMeaning, setFruitMeaning] = useState("");
  function inputChangeHandler(event) {
    var userInput = event.target.value;
    setFruitMeaning(fruitsList[userInput]);
  }

  function fruitClickHandler(fruits) {
    setFruitMeaning(fruitsList[fruits]);
  }

  return (
    <div className="App">
      <h1>Click on fruits</h1>
      <input
        placeholder={"or just type here these emojis"}
        onChange={inputChangeHandler}
      ></input>
      <h2>This fruit is : {fruitMeaning} </h2>

      <div>
        {
          fruitsWeHave.map((fruits) => (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => fruitClickHandler(fruits)}
            >
              {fruits}{" "}
            </span>
          )) //mapping
        }
      </div>
    </div>
  );
}
