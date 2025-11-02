import { createBrowserRouter } from "react-router";
import App from './components/App'
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import Cart from './components/Cart'
import ErrorPage from "./components/ErrorPage";

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
                element: <Shop />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
])

export default router