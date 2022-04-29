import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Nav.module.css"
import logo from "../../resources/logo.png"
import { useDispatch } from 'react-redux'
import { resetFilters, setPage } from '../../redux/actions'

function Nav(props) {

    const dispatch = useDispatch()
    const handleLogoClick = () => {
        dispatch(resetFilters())
        dispatch(setPage(1))
    }


    return (
        <nav>
            <Link to="/main" onClick={handleLogoClick}><img src={logo} alt="" className={styles.logo} /></Link>
            <Link to="/main/create-game" className={styles.link}>Add Game</Link>
        </nav>
    )
}

export default Nav