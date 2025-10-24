import { useLoaderData } from "react-router"
import styles from "../styles/Shop.module.css"
import Card from "./Card"

export default function Shop() {
    const products = useLoaderData()

    return(
        <main className={styles.container}>
            <h1>OUR PRODUCTS</h1>
            <div className={styles.products}>
                {products.map(product => (
                <Card 
                    key={product.id} 
                    title={product.title} 
                    price={product.price} 
                    image={product.image}/>
                ))}
            </div>
        </main>
    )
}