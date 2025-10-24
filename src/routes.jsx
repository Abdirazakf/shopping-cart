import { createBrowserRouter, BrowserRouter } from "react-router";
import App from './components/App'
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import Cart from './components/Cart'
import ErrorPage from "./components/ErrorPage";

let cachedProducts = null

async function fetchProducts() {

    if (cachedProducts) {
        console.log('Returning Cached products')
        return cachedProducts
    }

    try {
        const response = await fetch('https://fakestoreapi.com/products')

        if (response.status >= 400) {
            throw new Error("Network Error: Could not fetch data")
        }

        const data = await response.json()
        cachedProducts = data

        return data
        
    } catch (err) {
        throw new Error(err)
    }
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "shop",
                element: <Shop />,
                loader: fetchProducts,
                shouldRevalidate: () => false
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
])

export default router