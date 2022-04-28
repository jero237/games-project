import React from 'react'
import styles from "./SearchBar.module.css"
import Search from '../Search/Search'
import Filters from '../Filters/Filters'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchBar() {

    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    return (
        <div className={styles.container} style={{ display: loading ? "none" : "flex" }}>
            <Search />
            <Filters />
        </div>
    )
}
