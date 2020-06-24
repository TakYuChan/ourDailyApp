import React from "react";

const SHOP_DATA = {
  todolist: {
    id: 1,
    title: "To do list",
    description: "Make a note on everything",
    imageSrc: "/images/assets/todolist.png",
    route: "todolist",
    appDetails: {
      videoSrc: "https://player.vimeo.com/video/416381401",
      intros: [
        <p>
          The <span className="text-focal">To do list App </span>is built with{" "}
          <span className="text-focal">Vanilia Javascript</span>, this is my
          first project I build after learning Vanilia Javascript.
        </p>,
        <p>
          <span className="text-focal">The goal</span> 🎯 is to practice my
          knowledge on{" "}
          <span className="text-focal text-underline">
            manipulating the DOM elements direcly
          </span>{" "}
          to provide a usable to do list.
        </p>,
      ],
      tags: ["html", "css", "javascript"],
      tagsColor: ["orangered", "steelBlue", "limegreen"],
      features: [
        "Make use of local storage to save user's to dos",
        "Add + Remove todos",
        "Mark todos as completed",
        `Filter todos to "all", "completed", and "uncompleted" categories`,
      ],
    },
  },
  coloors: {
    id: 1,
    title: "Coloors",
    description: "Generate random colors",
    imageSrc: "/images/assets/colors.webp",
    route: "coloors",
    appDetails: {
      videoSrc: "https://player.vimeo.com/video/416381401",
      intros: [
        <p>
          The <span className="text-focal">Coloors App </span>is built with
          <span className="text-focal"> Vanilia Javascript </span>and make use
          of the{" "}
          <span className="text-focal text-underline">chroma js library.</span>
        </p>,
        <p>
          I built this <span className="text-focal">for fun 🤗 </span>and to
          learn to utilize external js library.
        </p>,
      ],
      tags: ["html", "css", "javascript", "chroma.js"],
      tagsColor: ["orangered", "steelblue", "limegreen", "yellowgreen"],
      features: [
        "Generate 5 random colors with hex",
        "Save your color palette to your library",
        "Lock the colors your don't wanna shuffle while shuffling the rest that is unlocked",
      ],
    },
  },
};

export default SHOP_DATA;
