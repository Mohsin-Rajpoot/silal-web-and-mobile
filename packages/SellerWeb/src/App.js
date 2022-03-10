import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from "./views/components/GlobalStyled";
import Layout from "@SilalApp/sellerweb/src/routes/Layout";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout />
    </div>
  )
}

export default App;
