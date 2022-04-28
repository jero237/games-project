//React
import React, { useEffect, useRef } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, searchGames, getAllGames } from '../../redux/actions'
//Components
import GameCard from '../GameCard/GameCard'
import Loading from '../Loading/Loading'
import PageControls from "../PageControls/PageControls"
import Search from '../Search/Search'
//Styles
import styles from "./Cards.module.css"
//React-router
import { useLocation } from 'react-router'
import Filters from '../Filters/Filters'
import SearchBar from '../SearchBar/SearchBar'

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Cards = (props) => {

    const counter = useRef(0)
    const dispatch = useDispatch()
    const { games, loading, page, searchResults } = useSelector(state => state)

    let searchQuery = useQuery().get("search")
    let pageGames = games.slice((page - 1) * 15, page * 15)


    useEffect(() => {
        if (searchQuery) dispatch(searchGames(searchQuery))
        else if (!games.length) dispatch(getAllGames())
    }, [searchQuery])


    if (searchQuery) {
        return (
            <>
                <div style={{ display: loading ? "flex" : "none" }}><Loading /></div>

                <SearchBar />
                {/* Renders all cards */}
                <div className={styles.cardsContainer} style={{ display: loading ? "none" : "grid" }}>
                    {searchResults ? searchResults.map(game =>
                        <GameCard
                            key={game.id}
                            id={game.id}
                            image={game.image}
                            name={game.name}
                            genres={game.genres}
                        />) : <h2>No games found</h2>}
                </div>
            </>
        )
    }


    return (
        <>
            <div style={{ display: loading ? "flex" : "none" }}><Loading /></div>

            <SearchBar />
            {/* Renders all cards */}
            <div className={styles.cardsContainer} style={{ display: loading ? "none" : "grid" }}>
                {pageGames.map(game =>
                    <GameCard
                        key={game.id}
                        id={game.id}
                        image={game.image}
                        name={game.name}
                        genres={game.genres}
                    />)}
            </div>
            <PageControls />
        </>

    )
}


export default Cards