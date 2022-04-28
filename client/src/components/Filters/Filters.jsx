import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterByOrigin, resetFilters, filterByGenre } from '../../redux/actions'
import styles from "./Filters.module.css"

export default function Filters() {

    const dispatch = useDispatch()
    const [clicked, setClicked] = useState([])

    const handleClick = (e) => {
        if (e.target.innerText === "User Created" || e.target.innerText === "Legacy") dispatch(filterByOrigin(e.target.innerText))
        else dispatch(filterByGenre(e.target.innerText))
        e.target.className = styles.active
        setClicked([...clicked, e])
    }

    const handleReset = () => {
        dispatch(resetFilters())
        clicked.forEach(e => e.target.className = "")
        setClicked([])
    }

    return (
        <>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn} >FILTER BY</button>
                <div className={styles.dropdownContent}>
                    <div className={styles.categoriesContainer}>
                        <p className={styles.categories} >Genre</p>
                        <span onClick={handleClick} >Action</span>
                        <span onClick={handleClick} >Adventure</span>
                        <span onClick={handleClick} >Arcade</span>
                        <span onClick={handleClick} >Board Games</span>
                        <span onClick={handleClick} >Card</span>
                        <span onClick={handleClick} >Casual</span>
                        <span onClick={handleClick} >Educational</span>
                        <span onClick={handleClick} >Family</span>
                        <span onClick={handleClick} >Fighting</span>
                        <span onClick={handleClick} >Indie</span>
                        <span onClick={handleClick} >Massively Multiplayer</span>
                        <span onClick={handleClick} >Platformer</span>
                        <span onClick={handleClick} >Puzzle</span>
                        <span onClick={handleClick} >RPG</span>
                        <span onClick={handleClick} >Racing</span>
                        <span onClick={handleClick} >Shooter</span>
                        <span onClick={handleClick} >Sports</span>
                        <span onClick={handleClick} >Simulation</span>
                        <span onClick={handleClick} >Strategy</span>
                    </div>
                    <div className={styles.categoriesContainer}>
                        <p className={styles.categories} >Videogame Type</p>
                        <span onClick={handleClick} >User Created</span>
                        <span onClick={handleClick} >Legacy</span>
                    </div>
                </div>
            </div>

            <button onClick={handleReset}>RESET FILTERS</button>

            <div className={styles.dropdown}>
                <button className={styles.dropbtn} >SORT BY</button>
                <div className={styles.dropdownContent}>
                    <div className={styles.categoriesContainer}>
                        <span onClick={handleClick} >Name</span>

                    </div>
                    <div className={styles.categoriesContainer}>
                        <span onClick={handleClick} >Rating</span>
                    </div>
                </div>
            </div>
        </>
    )
}
