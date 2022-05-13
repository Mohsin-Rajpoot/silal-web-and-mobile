import React, { useState } from "react"
import { Content } from "../../../index"
import Sidebar from "../../../components/UI/Sidebar"
import GlobalStyle from "../../../components/GlobalStyled"


const OrdersLayout = () => {
  const [sideBar, setSideBar] = useState(true)
  const sideBarToggle = (view) => {
    setSideBar(view)
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="d-flex">
        <Sidebar sideBar={sideBar} setSideBar={sideBarToggle} />
        <div className="flex-1">
          <Content sideBar={sideBar} setSideBar={sideBarToggle} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default OrdersLayout
