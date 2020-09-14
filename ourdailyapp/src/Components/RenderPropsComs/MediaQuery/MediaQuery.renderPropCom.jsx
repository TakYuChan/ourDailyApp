import React from "react";

import { useMediaQuery } from "react-responsive";

const MediaQuery = ({
  mediaQueryPx,
  renderForAbove,
  children,
  ...otherProps
}) => {
  const mq = useMediaQuery({ query: `(min-device-width: ${mediaQueryPx}px)` });

  return mq ? renderForAbove({ ...otherProps }) : children({ ...otherProps });
};

export default MediaQuery;
