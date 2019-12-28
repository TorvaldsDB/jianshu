import React from "react";
import Header from "./common/header";
import { GlobalStyle } from "./GlobalStyle";
import { GlobalIconStyle } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <GlobalIconStyle />
      <Provider store={store}>
        <>
          <BrowserRouter>
            <>
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </>
          </BrowserRouter>
        </>
      </Provider>
    </React.Fragment>
  );
}

export default App;
