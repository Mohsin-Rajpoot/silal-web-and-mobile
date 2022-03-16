import React from "react";
import ClientLayout from "./routes/ClientLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./views/components/GlobalStyled";

const ClientContainer = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ClientLayout />
    </div>
  );
};

export default ClientContainer;
