import React from "react";

export const componentWithPreload = (importStatement) => {
  const component = React.lazy(importStatement);
  component.preload = importStatement;
  return component;
};
