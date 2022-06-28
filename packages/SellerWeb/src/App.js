import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./views/components/GlobalStyled";
import Layout from "@SilalApp/sellerweb/src/routes/Layout";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import Statistics from "./views/pages/home/Statistics";
import Splashpage from "./views/pages/Login/Splashpage/Splashpage";

// import SecurityPrefrences from "./views/pages/settings/SecurityPrefrences";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          {/* <Statistics /> */}
          <Layout />
          {/* <Splashpage /> */}
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
