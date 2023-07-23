import "./Menu.css";
import Meals from "./Meals";

function Menu(){
    return(
        <div className="menu-container">
            <h1 className="menu-title">Our Menu</h1>
            <div className="nav-buttons">
                <Meals/>
            </div>
        </div>
    );
}
export default Menu;