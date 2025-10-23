import { useLoaderData } from "react-router"
import styles from "../styles/Shop.module.css"

export default function Shop() {
    const products = useLoaderData()
    console.log(products)

    return(
        <main className={styles.container}>
            <h1>OUR PRODUCTS</h1>
            <div className={styles.products}>
                {products.map(product => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}