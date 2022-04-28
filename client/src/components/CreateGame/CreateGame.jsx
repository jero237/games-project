import React from 'react'
import Nav from "../Nav/Nav"
import styles from "../styles/CreateGame.module.css"

export default function CreateGame() {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <h1>Create Game</h1>
                <form action="" className={styles.form}>
                    <div className={styles.formGroup}>
                        <label>Game Name</label>
                        <input type="text" placeholder="Enter Game Name" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Game Description</label>
                        <input type="text" placeholder="Enter Game Description" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Game Image</label>
                        <input type="text" placeholder="Enter Game Image" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Categories</label>
                        <label className='cont'>
                            <input type="checkbox" />
                            <span>Action</span>
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
