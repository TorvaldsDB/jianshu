import React from "react";
import Header from "./common/header";
import { GlobalStyle } from "./GlobalStyle";
import { GlobalIconStyle } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <GlobalIconStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </React.Fragment>
  );
}

export default App;
