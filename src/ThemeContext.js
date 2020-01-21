import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
class ThemeContextProvider extends Component {
  state = { theme: "day", toggleTheme: this.toggleTheme };
  toggleTheme = () => {
    this.state.theme === "day"
      ? this.setState({ theme: "night" })
      : this.setState({ theme: "day" });
  };
  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { ThemeContextProvider, Consumer as ThemeContextConsumer };
