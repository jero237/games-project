import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Nav.module.css"
import logo from "../../resources/logo.png"
import { useDispatch } from 'react-redux'
import { setPage } from '../../redux/actions'

function Nav(props) {

    const dispatch = useDispatch()

    return (
        <nav>
            <Link to="/main" onClick={() => dispatch(setPage(1))}><img src={logo} alt="" className={styles.logo} /></Link>
            <Link to="/create-game" className={styles.link}>Add Game</Link>
        </nav>
    )
}

export default Nav