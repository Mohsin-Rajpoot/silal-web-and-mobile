import React from "react"
import ProductLayout from "./views/pages/products/ProductLayout"
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalStyle from "./views/components/GlobalStyled"

const ProductContainer = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ProductLayout />
    </div>
  )
}

export default ProductContainer
