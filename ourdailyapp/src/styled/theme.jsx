const rootStyles = {
  red: `#ff3860`,
  red_dark: `#ff1443`,
  red_light: `#ff5c7c`,
  blue: `#498afb`,
  blue_dark: `#2674fa`,
  blue_light: `#6ca0fc`,
  orange: `#fa8142`,
  orange_dark: `#f96a1f`,
  orange_light: `#fb9865`,
  green: `#09c372`,
  green_dark: `#07a15e`,
  green_light: `#0be586`,
  purple: `#9166cc`,
  purple_dark: `#7d4bc3`,
  purple_light: `#a481d5`,
  yellow: `#ffdd57`,
  yellow_dark: `#ffd633`,
  yellow_light: `#ffe47a`,
  pink: `#ff4088`,
  pink_dark: `#ff1c72`,
  pink_light: `#ff649e`,
  gray0: `#f8f8f8`,
  gray1: `#dbe1e8`,
  gray2: `#b2becd`,
  gray3: `#6c7983`,
  gray4: `#454e56`,
  gray5: `#2a2e35`,
  gray6: `#12181b`,

  header_clr: `#6ca0fc`,
};

export const lightTheme = {
  body: rootStyles.gray0,
  header: rootStyles.header_clr,
  headerToolTip: rootStyles.gray2,
  shopNav: rootStyles.blue_light,
  text: rootStyles.gray4,
  button: rootStyles.blue_light,
  buttonText: "white",
  shopNavText_Hover: rootStyles.gray2,
  cartIcon: "white",
  mainPage: {
    app_Hover: `rgba(222, 222, 223, 0.3)`,
    appLinkText: rootStyles.gray4,
    spinner_applicationWrapper: rootStyles.blue_light,
  },
  appStore: {
    cardBg: "white",
    cardText: rootStyles.gray4,
    cardLoadingContent_primary: rootStyles.gray1,
    // cardLoadingContent_secondary: `#d1d8e1`,
    cardLoadingContent_secondary: rootStyles.gray6,
  },
  cartPage: {
    cartItemTitleCreatorText: "black",
    cartItemPriceText: rootStyles.red_dark,
    cartItemBtns: rootStyles.blue_dark,
    cartItemBtns_Hover: rootStyles.blue_light,
    cartWishlistBorder: `1px solid rgba(128, 128, 128, 0.13)`,
  },
  floatNav: {
    floatNavBg: rootStyles.blue_light,
    floatNavText: "pink",
    floatNavText_Hover: "white",
  },
  appDetailPage: {
    featureList: rootStyles.gray6,
    preloader_primary: rootStyles.gray1,
    preloader_secondary: rootStyles.gray6,
  },
  commentsConverterPage: {
    title: rootStyles.blue,
    btnExample: rootStyles.blue,
  },
  pigGamePage: {
    panel_bg: "white",
    targetInput_border: rootStyles.header_clr,
    activePanel_bg: rootStyles.gray0,
    dot_color: `#eb4d4d`,
    current_container: `#eb4d4d`,
    totalScore: `#eb4d4d`,
    preloader_bg: rootStyles.header_clr,
    playerLogInBtn_primary: `#eb4d4d`,
    PlayerLogInBtn_secondary: "white",
  },
};

export const darkTheme = {};
