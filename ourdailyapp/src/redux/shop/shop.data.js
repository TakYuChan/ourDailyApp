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
        "The To do list App is built with vanilia Javascript, this is my first project I build after learning vanilia Javascript.",
        "The goal is to practice my knowledge on manipulating the DOM elements direcly to provide a usable to do list.",
      ],
      tags: ["html", "css", "javascript"],
      tagsColor: ["orangered", "steelBlue", "limegreen"],
      features: [
        "Make use of local storage to save user's to dos",
        "Add + Remove todos",
        "Mark todos as completed",
        `Filter todos to "all", "completed", and "uncompleted"`,
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
        "The Coloors App is built with vanilia Javascript and make use of the chroma js library.",
        "I built this for fun and to learn to utilize external js library.",
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
