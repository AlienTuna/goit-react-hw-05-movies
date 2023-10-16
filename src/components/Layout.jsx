import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;