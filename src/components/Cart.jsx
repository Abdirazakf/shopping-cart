import { useOutletContext } from "react-router"
import styles from "../styles/Cart.module.css"

export default function Cart() {
    const { cart, removeItem } = useOutletContext()

    if (cart.length === 0) {
        return (
            <main className={styles.container}>
                <h1>YOUR SHOPPING CART</h1>
                <p className={styles.empty}>Your cart is empty. Start shopping!</p>
            </main>
        )
    }

    return(
        <main className={styles.container}>
            <h1>YOUR SHOPPING CART</h1>
            <div className={styles.cartContainer}>
                <h3 className={styles.itemHeader}>Items</h3>
                <h3 className={styles.quantityHeader}>Quantity</h3>
                <h3 className={styles.priceHeader}>Price</h3>
                <h3 className={styles.totalHeader}>Total</h3>
                {cart.map(item => (
                    <>
                        <div key={`title-${item.id}`} className={styles.items}>
                            <h4>{item.title}</h4>
                        </div>
                        <div key={`quantity-${item.id}`} className={styles.quantities}>
                            <h4>{item.quantity}</h4>
                        </div>
                        <div key={`price-${item.id}`} className={styles.prices}>
                            {item.price.toFixed(2)}
                        </div>
                        <div key={`total-${item.id}`} className={styles.totals}>
                            {(item.price * item.quantity).toFixed(2)}
                        </div>
                    </>
                ))}
            </div>
        </main>
    )
}