import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalStyle from "./components/GlobalStyled"
import OffersLayout from "./pages/offers/OffersLayout"

const OffersContainer = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <OffersLayout />
    </div>
  )
}

export default OffersContainer
