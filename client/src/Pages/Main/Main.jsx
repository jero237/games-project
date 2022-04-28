//React
import React, { useEffect } from 'react'
//Components
import Nav from "../../components/Nav/Nav"
import Cards from '../../components/Cards/Cards'
import GameDetails from '../../components/GameDetails/GameDetails'
// import CreateGame from '../../components/CreateGame/CreateGame'
//Styles
import styles from "./Main.module.css"
//Router
import { Route } from 'react-router'

const Main = (props) => {

    return (
        <>
            <Nav />

            <div className={styles.container}>
                <Route path="/main" exact>
                    <Cards />
                </Route>

                {/* <Route path="/create-game/" component={CreateGame} exact /> */}

                <Route path="/main/:id" component={GameDetails} exact />
            </div>


        </>
    )
}


export default Main