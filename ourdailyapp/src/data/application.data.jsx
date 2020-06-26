import React from "react";

const APPLICATIONS_DATA = [
  {
    name: "Todo list",
    route: "todo",
    image: (
      <img
        className="img--todolist"
        src="/images/assets/todolist2.jpg"
        alt="to do list"
      />
    ),
  },
  {
    name: "Coloors",
    route: "todolist",
    image: (
      <img
        className="img--coloors"
        src="/images/assets/coloors.jpg"
        alt="colors"
      />
    ),
  },
  {
    name: "CM Converter",
    route: "commentsConverter",
    image: (
      <img
        className="img--cmConverter"
        src="/images/assets/CM Converter.png"
        alt="to do list"
      />
    ),
  },
];

export default APPLICATIONS_DATA;
