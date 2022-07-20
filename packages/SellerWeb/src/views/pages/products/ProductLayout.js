import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { Content } from "../../index"
import Sidebar from "../../components/UI/Sidebar"
import Nav from "../../components/products/Nav"

const ProductLayout = () => {
  const [sideBar, setSideBar] = useState(true)
  const sideBarToggle = (view) => {
    setSideBar(view)
  }
  const [category, setCategory] = useState()
  const { pathname } = useLocation()

  return (
    <React.Fragment>
      <div className="d-flex">
        <Sidebar sideBar={sideBar} setSideBar={sideBarToggle} />
        <div className="flex-1">
          {pathname == "/product/create-new-item" ? '' :
            <div className="px-3">
              <Nav
                sideBar={sideBar}
                setSideBar={setSideBar}
              />
            </div>
          }
          <Content sideBar={sideBar} setSideBar={sideBarToggle} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductLayout
