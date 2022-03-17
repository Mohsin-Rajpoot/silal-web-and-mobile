import React, { useState } from "react"
import { Content } from "../../index"
import Sidebar from "../../components/UI/Sidebar"
import Nav from "../../components/products/Nav"

const ProductLayout = () => {
  const [sideBar, setSideBar] = useState(true)
  const sideBarToggle = (view) => {
    setSideBar(view)
  }
  const [category, setCategory] = useState()

  return (
    <React.Fragment>
      <div className="main-content d-flex">
        <Sidebar sideBar={sideBar} setSideBar={sideBarToggle} />
        <div className="flex-1">
          <div class="px-3">
            <Nav
              sideBar={sideBar}
              setSideBar={setSideBar}
            />
          </div>
          <Content sideBar={sideBar} setSideBar={sideBarToggle} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductLayout
