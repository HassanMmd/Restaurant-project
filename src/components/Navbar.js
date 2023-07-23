import { Link, Route, Routes } from "react-router-dom"
import "./Navbar.css"
import Main from "./Main";
import Menu from "./Menu";
import React from "react";
import Book from "./Book";
import About from "./About";
import { useMediaQuery } from 'react-responsive';

function Navbar() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div>
            {isDesktopOrLaptop &&<nav className="nav-list">
                <Link to="Restaurant/" className="nav-item">Home</Link>
                <Link to="Restaurant/Menu/"  className="nav-item">Menu</Link>
                <Link to="Restaurant/Book/" className="nav-item">Book</Link>
                <Link to="Restaurant/About/" className="nav-item">About</Link>
            </nav>}
            {isTabletOrMobile &&<nav className="nav-list-mobile">
                <Link to="Restaurant/" className="nav-item-mobile">Home</Link>
                <Link to="Restaurant/Menu/"  className="nav-item-mobile">Menu</Link>
                <Link to="Restaurant/Book/" className="nav-item-mobile">Book</Link>
                <Link to="Restaurant/About/" className="nav-item-mobile">About</Link>
            </nav>}
            <Routes>
                <Route path="Restaurant/" element={<Main />}></Route>
                <Route path="Restaurant/Menu//*" element={<Menu />}></Route>
                <Route path="Restaurant/Book/" element={<Book />}></Route>
                <Route path="Restaurant/About/" element={<About />}></Route>
            </Routes>
        </div>
    );
}
export default Navbar;