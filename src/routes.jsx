import { createBrowserRouter, BrowserRouter } from "react-router";
import App from './components/App'
import Shop from './components/Shop'
import Cart from './components/Cart'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'shop',
        element: <Shop />
    },
    {
        path: 'cart',
        element: <Cart />
    }
])

export default router