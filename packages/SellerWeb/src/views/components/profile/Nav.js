import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    SimpleNav,
    NavStyled,
} from '../Style'
import {
    Menu,
} from '../AllImages'

const Nav = ({
    sideBar,
    setSideBar,
}) => {
    const { pathname } = useLocation()
    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }

    return (
        <>
            <SimpleNav>
                <button
                    className="menu"
                    onClick={sidebarHandler}>
                    <Menu />
                </button>
                <h1>Profile</h1>
            </SimpleNav>
            <NavStyled>
                <div className="d-flex">
                    <Link
                        to="/profile"
                        className={`nav-link-btn ${pathname == '/profile' ? 'active' : ''}`}>
                        Profile
                    </Link>
                    <Link
                        to="#"
                        className={`nav-link-btn`}>
                        Opening hours
                    </Link>
                    <Link
                        to="#"
                        className={`nav-link-btn`}>
                        Payment history
                    </Link>
                    <Link
                        to="#"
                        className={`nav-link-btn`}>
                        Transaction ledger
                    </Link>
                </div>
            </NavStyled>
        </>
    )
}

export default Nav