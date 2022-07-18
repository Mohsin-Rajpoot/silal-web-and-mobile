import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./views/components/GlobalStyled";
import Layout from "@SilalApp/sellerweb/src/routes/Layout";
import QuestionaireSplash from "./views/pages/Questionaire/QuestionaireSplash";

// import SecurityPrefrences from "./views/pages/settings/SecurityPrefrences";

const App = () => {
  return (
    <div className="App">
          <GlobalStyle />
          <Layout />
          {/* <QuestionaireSplash /> */}
    </div>
  );
};

export default App;
