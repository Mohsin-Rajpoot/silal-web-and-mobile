import React, { useState } from "react"
import { Content } from "../views/index"
import Sidebar from "../views/components/UI/Sidebar"
import Menu from "../views/components/UI/Menu"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Layout = () => {
  const [sideBar, setSideBar] = useState(true)
  const sideBarToggle = (view) => {
    setSideBar(view)
  }
  const { pathname } = useLocation()
  // useEffect(() => {
  //   setSideBar(false)
  // }, [pathname])

  return (
    <React.Fragment>
      <div className="d-flex">
        <Sidebar
          sideBar={sideBar}
          setSideBar={sideBarToggle}
        />
        <Content
          sideBar={sideBar}
          setSideBar={sideBarToggle}
        />
        {/* {pathname == "/profile" || pathname == "/documents" || pathname == "/contact-us" || pathname == "/settings" ? (
          null
        ) : ( */}
          <Menu sideBar={sideBar} />
        {/* )} */}
      </div>
    </React.Fragment>
  )

}

export default Layout