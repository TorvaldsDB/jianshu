import React from "react";
import Header from "./common/header";
import { GlobalStyle } from "./GlobalStyle";
import { GlobalIconStyle } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <GlobalIconStyle />
      <Provider store={store}>
        <>
          <Header />
          <BrowserRouter>
            <>
              <Route path="/" exact render={() => <div>home</div>}></Route>
              <Route
                path="/detail"
                exact
                render={() => <div>detail</div>}
              ></Route>
            </>
          </BrowserRouter>
        </>
      </Provider>
    </React.Fragment>
  );
}

export default App;
