import { useOutletContext } from "react-router"
import styles from "../styles/Shop.module.css"
import Card from "./Card"
import { OrbitProgress } from "react-loading-indicators"

export default function Shop() {
    const { products, loading, error, addToCart } = useOutletContext()

    if (loading) {
        return (
            <main className={styles.container}>
                <h1>OUR PRODUCTS</h1>
                <OrbitProgress color="#484c55" size="large" /> 
            </main>
        )
    }
    
    if (error) {
        return (
            <main className={styles.container}>
                <h1>OUR PRODUCTS</h1>
                <p>Error loading products: {error}</p>
            </main>
        )
    }
    
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