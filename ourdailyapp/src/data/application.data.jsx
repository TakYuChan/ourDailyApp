import React from "react";

import { ReactComponent as Todosvg } from "../assets/todolist.svg";
import { ReactComponent as Coloorsvg } from "../assets/coloors-svg.svg";
import { ReactComponent as CommentsConvertersvg } from "../assets/commentsConverter-svg.svg";

const APPLICATIONS_DATA = [
  {
    name: "Todo list",
    route: "todo",
    svg: <Todosvg />,
  },
  {
    name: "Coloors",
    route: "todolist",
    svg: <Coloorsvg />,
  },
  {
    name: "CM Converter",
    route: "commentsConverter",
    svg: <CommentsConvertersvg />,
  },
];

export default APPLICATIONS_DATA;
