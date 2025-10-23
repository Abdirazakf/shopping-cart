import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function App() {
    return (
        <div className="container">
            <NavBar />
            <Outlet />
        </div>
    )
}