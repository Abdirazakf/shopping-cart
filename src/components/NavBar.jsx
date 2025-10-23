import { Link } from "react-router"
import cartLogo from '../assets/cart.svg'
import styles from "../styles/NavBar.module.css"

export default function NavBar() {
    return (
        <header className={styles.navHeader}>
            <img src={cartLogo} alt="Page Logo" />
            <h1>ShopMart</h1>
            <div className={styles.linkContainer}>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="shop">
                    <button>Shop</button>
                </Link>
                <Link to="cart">
                    <button>Cart</button>
                </Link>
            </div>
        </header>
    )
}