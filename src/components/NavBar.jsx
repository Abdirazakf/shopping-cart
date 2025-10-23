import { Link } from "react-router"

export default function NavBar() {
    return (
        <header>
            <img src="../assets/cart.svg" alt="Page Logo" />
            <h1>ShopMart</h1>
            <div className="link-container">
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