import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { NavStyled } from "../Style"
import { notificationsData } from './DummyData'
import {
    NotificationMenu,
    NotificationBtn,
    Notification,
} from './Components'
import {
    Menu,
    NotificationIcon,
    NotifiMsgIcon,
} from '../AllImages'

const Nav = ({
    sideBar,
    setSideBar,
}) => {
    const location = useLocation()
    const [notifications, setNotifications] = useState(false)

    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }

    return (
        <NavStyled>
            <div className="d-flex">
                <button
                    className="menu"
                    onClick={sidebarHandler}>
                    <Menu />
                </button>
                <Link
                    to="/"
                    className={`nav-link-btn ${location.pathname == "/" ? "active" : ""}`}>
                    Statistics
                </Link>
                <Link
                    to="/reviews"
                    className={`nav-link-btn ${location.pathname == "/reviews" ? "active" : ""}`}>
                    Reviews
                </Link>
                <Link
                    to="/out-of-stock"
                    className={`nav-link-btn ${location.pathname == "/out-of-stock" ? "active" : ""}`}>
                    Out-of-stock
                </Link>
            </div>
            <div className="position-relative">
                <NotificationBtn
                    className={`new ${notifications ? 'active' : ''}`}
                    onClick={() => setNotifications(!notifications)}>
                    <NotificationIcon />
                </NotificationBtn>
                <NotificationMenu className={notifications ? 'active' : ''}>
                    <div className="head">
                        <h6 className="f-medium mb-0">Your notifications</h6>
                        <span className="text-white">3 New</span>
                    </div>
                    <div>
                        {notificationsData.map((notif, i) => (
                            <Notification
                                key={i}
                                Icon={notif.icon}
                                iconClr={notif.clr}
                                status={notif.status}
                                title={notif.title}
                                descp={notif.descp}
                                time={notif.time}
                            />
                        ))}
                    </div>
                    <h6 className="f-medium mb-0">Previous notifications</h6>
                    <div>
                        <Notification
                            Icon={NotifiMsgIcon}
                            iconClr="blue"
                            status="old"
                            title="Silal Management"
                            descp="The refund on the order #247hw9 has been completed."
                            time="10m"
                        />
                    </div>
                </NotificationMenu>
            </div>
        </NavStyled>
    )
}

export default Nav