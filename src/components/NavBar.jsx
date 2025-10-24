import { Link, useLocation } from "react-router"
import cartLogo from '../assets/cart.svg'
import styles from "../styles/NavBar.module.css"

export default function NavBar() {
    const location = useLocation()

    return (
        <header className={styles.navHeader}>
            <img src={cartLogo} alt="Page Logo" />
            <h1>ShopMart</h1>
            <div className={styles.linkContainer}>
                <Link to="/">
                    <button className= {location.pathname === "/" ? `${styles.active} ${styles.btn}` : styles.btn}>
                        Home
                    </button>
                </Link>
                <Link to="shop">
                    <button className= {location.pathname === "/shop" ? `${styles.active} ${styles.btn}`: styles.btn}>
                        Shop
                    </button>
                </Link>
                <Link to="cart">
                    <button className= {location.pathname === "/cart" ? `${styles.active} ${styles.btn}`: styles.btn}>
                        Cart
                    </button>
                </Link>
            </div>
        </header>
    )
}