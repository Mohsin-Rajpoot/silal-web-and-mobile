import React, { useState } from "react";
import { Content } from "../views/index";
import Sidebar from "../views/components/UI/Sidebar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../views/components/clients/Nav";
const ClientLayout = () => {
  const [sideBar, setSideBar] = useState(true);
  const sideBarToggle = (view) => {
    setSideBar(view);
  };

  return (
    <React.Fragment>
      <div className="main-content d-flex">
        <Sidebar sideBar={sideBar} setSideBar={sideBarToggle} />
        <div className="flex-1">
          <div class="px-3">
            <Nav sideBar={sideBar} setSideBar={setSideBar} />
          </div>
          <Content sideBar={sideBar} setSideBar={sideBarToggle} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientLayout;
