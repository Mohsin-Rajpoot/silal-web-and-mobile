import React, { useState } from "react"
import { Content } from "../views/index"
import Sidebar from "../views/components/UI/Sidebar"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
const Layout = () => {
  const [sideBar, setSideBar] = useState(false)
  const sideBarToggle = (view) => {
    setSideBar(view)
  }
  const { pathname } = useLocation()
  useEffect(() => {
    setSideBar(false)
  }, [pathname])
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