import React from "react";
import Layout from "./routes/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from "./views/components/GlobalStyled";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout />
    </div>
  )
}

export default App;
