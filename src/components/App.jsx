import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function App() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart)
    }, [cart])

    function addToCart(product) {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id)

            if (existingItem) {
                //If the item is already in the cart, increase quantity
                return prevCart.map(item => 
                    item.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
            } else {
                // Add new item
                return [...prevCart, {...product, quantity: 1}]
            }
        })
    }


    return (
        <div className="container">
            <NavBar />
            <Outlet context={{
                cart,
                addToCart
            }}/>
        </div>
    )
}