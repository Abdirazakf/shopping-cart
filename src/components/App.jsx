import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function App() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}