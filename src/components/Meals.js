import { Link, Route, Routes } from "react-router-dom";
import "./Meals.css";
import menuBig from "../assets/imgs/menuBig.png"
import menuMedium from "../assets/imgs/menuMedium.png"
import menuSmall from "../assets/imgs/menu.png"
import menu from "../assets/imgs/menuclosed.png"
import React from "react";
import { useMediaQuery } from 'react-responsive';

function Meals() {
    const [underLine1, setUnderLine1] = React.useState({
        textDecoration: "none"
    })
    const [underLine2, setUnderLine2] = React.useState({
        textDecoration: "none"
    })
    const [underLine3, setUnderLine3] = React.useState({
        textDecoration: "none"
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    function Checked1() {
        setUnderLine1({ textDecoration: "underline" })
        setUnderLine2({ textDecoration: "none" })
        setUnderLine3({ textDecoration: "none" })
    }
    function Checked2() {
        setUnderLine2({ textDecoration: "underline" })
        setUnderLine1({ textDecoration: "none" })
        setUnderLine3({ textDecoration: "none" })
    }
    function Checked3() {
        setUnderLine3({ textDecoration: "underline" })
        setUnderLine1({ textDecoration: "none" })
        setUnderLine2({ textDecoration: "none" })
    }

    return (
        <div>
            {isDesktopOrLaptop && <nav className="nav-list-btn">
                <Link to="BigMeal" onClick={Checked1} style={underLine1} className="nav-btn-item">Big Meals</Link>
                <Link to="MediumMeal" onClick={Checked2} style={underLine2} className="nav-btn-item">Medium Meals</Link>
                <Link to="SmallMeal" onClick={Checked3} style={underLine3} className="nav-btn-item">Small Meals</Link>
            </nav>}
            {isTabletOrMobile && <nav className="nav-list-btn-mobile">
                <Link to="BigMeal" onClick={Checked1} style={underLine1} className="nav-btn-item">Big Meals</Link>
                <Link to="MediumMeal" onClick={Checked2} style={underLine2} className="nav-btn-item">Medium Meals</Link>
                <Link to="SmallMeal" onClick={Checked3} style={underLine3} className="nav-btn-item">Small Meals</Link>
            </nav>}
            <Routes>
                {isDesktopOrLaptop && <Route path="/" element={<img className="menu-img" src={menu} alt="menu"></img>}></Route>}
                {isDesktopOrLaptop && <Route path="BigMeal" element={<img className="menu-bg-img" src={menuBig} alt="menu"></img>}></Route>}
                {isDesktopOrLaptop && <Route path="MediumMeal" element={<img className="menu-md-img" src={menuMedium} alt="menu"></img>}></Route>}
                {isDesktopOrLaptop && <Route path="SmallMeal" element={<img className="menu-sm-img" src={menuSmall} alt="menu"></img>}></Route>}
                {isTabletOrMobile && <Route path="/" element={<img className="menu-img-mobile" src={menu} alt="menu"></img>}></Route>}
                {isTabletOrMobile && <Route path="BigMeal" element={<img className="menu-bg-img-mobile" src={menuBig} alt="menu"></img>}></Route>}
                {isTabletOrMobile && <Route path="MediumMeal" element={<img className="menu-md-img-mobile" src={menuMedium} alt="menu"></img>}></Route>}
                {isTabletOrMobile && <Route path="SmallMeal" element={<img className="menu-sm-img-mobile" src={menuSmall} alt="menu"></img>}></Route>}
            </Routes>
        </div>
    );
}
export default Meals;