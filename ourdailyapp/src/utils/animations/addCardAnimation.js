const addCartAnimation = (itemImageSrc, animationAppendTo) => {
  if (document.querySelector(animationAppendTo) !== null) {
    let addedApp = document.createElement("div");
    addedApp.classList.add("addedApp");
    // addedApp.style.background = `red`;
    addedApp.style.backgroundImage = `url(${itemImageSrc}.jpeg)`;

    let wrapper = document.createElement("div");
    wrapper.classList.add("animation-parabola-wrapper");
    wrapper.append(addedApp);
    document.querySelector(animationAppendTo).append(wrapper);

    setTimeout(() => {
      wrapper.outerHTML = "";
    }, 700);
  }
};

export default addCartAnimation;
