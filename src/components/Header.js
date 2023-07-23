import Logo from "../assets/imgs/logo2.png";
import "./Header.css";
import { useMediaQuery } from 'react-responsive';

function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <header className="head">
            <img className="img" src={Logo} alt="logo"></img>
            {isDesktopOrLaptop && <div><div className="welcome">Welcome</div></div>}
            {isTabletOrMobile && <div><div className="welcome-mobile">Welcome</div></div>}
        </header>
    );
}
export default Header;