import React, { useEffect } from 'react'
import styles from "./CreateGame.module.css"

export default function CreateGame() {



    useEffect(() => {

    }, [])


    return (
        <>
            <h1>Create Game</h1>
            <form action="" className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input type="text" placeholder="Name" />
                </div>
                <div className={styles.formGroup}>
                    <label>Description</label>
                    <textarea className={styles.gameDescription} placeholder="Description"></textarea>
                </div>
                <div className={styles.formGroup}>
                    <label>Image</label>
                    <input type="text" placeholder="Image URL" />
                </div>
                <div className={styles.categories}>
                    <label>Categories</label>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.checkbox} />
                        <label>Action</label>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.checkbox} />
                        <label>aSasa</label>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.checkbox} />
                        <label>Acsaastion</label>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.checkbox} />
                        <label>Acsaastion</label>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.checkbox} />
                        <label>Acsaastion</label>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.checkbox} />
                        <label>Acsaastion</label>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.checkbox} />
                        <label>Acsaastion</label>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.checkbox} />
                        <label>Acsaastion</label>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}