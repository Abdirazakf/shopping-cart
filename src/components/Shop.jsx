import { useLoaderData, useOutletContext } from "react-router"
import styles from "../styles/Shop.module.css"
import Card from "./Card"

export default function Shop() {
    const products = useLoaderData()
    const { addToCart } = useOutletContext()

    return(
        <main className={styles.container}>
            <h1>OUR PRODUCTS</h1>
            <div className={styles.products}>
                {products.map(product => (
                <Card 
                    key={product.id}
                    id={product.id} 
                    title={product.title} 
                    price={product.price.toFixed(2)} 
                    image={product.image}
                    addToCart={addToCart}
                />
                ))}
            </div>
        </main>
    )
}