import React, { useState } from "react"
import { Content } from "../../index"
import Sidebar from "../../components/UI/Sidebar"
import Menu from "../../components/UI/Menu"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Nav from "../../components/clients/Nav"

const ClientLayout = () => {
  const [sideBar, setSideBar] = useState(true)
  const sideBarToggle = (view) => {
    setSideBar(view)
  }

  return (
    <React.Fragment>
      <div className="d-flex">
        <Sidebar sideBar={sideBar} setSideBar={sideBarToggle} />
        <div className="flex-1">
          <div className="px-3">
            <Nav sideBar={sideBar} setSideBar={setSideBar} />
          </div>
          <Content sideBar={sideBar} setSideBar={sideBarToggle} />
        </div>
        <Menu
          sideBar={sideBar}
        />
      </div>
    </React.Fragment>
  )
}

export default ClientLayout
