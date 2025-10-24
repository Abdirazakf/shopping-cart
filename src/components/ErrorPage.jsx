import styles from "../styles/ErrorPage.module.css"
import NavBar from "./NavBar"
import { Link } from "react-router"

export default function ErrorPage() {
    return (
        <>
            <NavBar />
            <main className={styles.container}>
                <h1>404 - PAGE NOT FOUND</h1>
                <p>Oops! The page you're looking for doesn't exist.
                    It might have been moved or deleted.
                </p>
                <Link to="/">
                    <button className={styles.btn}>GO TO HOMEPAGE</button>
                </Link>
            </main>
        </>
    )
}