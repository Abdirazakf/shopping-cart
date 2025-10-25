import { Outlet } from "react-router";
import { useEffect, useMemo, useState } from "react";
import NavBar from "./NavBar";

export default function App() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
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

    function removeItem(productId) {
        setCart(prevCart => prevCart.filter(item => item.id !== productId))
    }
    
    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeItem(productId)
            return
        }

        setCart(prevCart => prevCart.map(item => item.id === productId ? {...item, quantity } : item))
    }

    function clearCart() {
        setCart([])
    }

    function getTotalItems() {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }

    const cartSummary = useMemo(() => {
        const subtotal = (cart.reduce((total, item) => total + (item.price * item.quantity), 0)).toFixed(2)
        const shipping = subtotal >= 50 ? 0 : 5
        const grandtotal = (parseFloat(subtotal) + parseFloat(shipping)).toFixed(2)

        return {subtotal, shipping, grandtotal}
    }, [cart])

    return (
        <div className="container">
            <NavBar itemTotal={getTotalItems()}/>
            <Outlet context={{
                cart,
                addToCart,
                removeItem,
                clearCart,
                updateQuantity,
                getTotalItems,
                cartSummary
            }}/>
        </div>
    )
}