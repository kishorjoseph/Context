import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";
const Image = () => {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className={`${context.theme}-image image`}>
          <div className={`${context.theme}-ball ball`} />
          <button onClick={context.toggleTheme}>Toggle</button>
        </div>
      )}
    </ThemeContextConsumer>
  );
};
export default Image;
