import React, { useState } from "react"
import { Content } from "../views/index"
import Sidebar from "../views/components/UI/Sidebar"

const Layout = () => {
  const [sideBar, setSideBar] = useState(false)
  const sideBarToggle = (view) => {
    setSideBar(view)
  }
  return (
    <React.Fragment>
      <div className="main-content">
        <Content
          sideBar={sideBar}
          setSideBar={sideBarToggle}
        />
        <Sidebar
          sideBar={sideBar}
          setSideBar={sideBarToggle}
        />
      </div>
    </React.Fragment>
  )

}

export default Layout