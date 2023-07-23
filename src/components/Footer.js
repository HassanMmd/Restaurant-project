import imgFooter from '../assets/imgs/logo2.png';
import "./Footer.css";
import { useMediaQuery } from 'react-responsive';

function Footer(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return(
        <footer>
           {isDesktopOrLaptop &&<div className='footer'>
            <img className='footer-logo' src={imgFooter}></img>
                <div>
                    <hr/>
                <img className='footer-img' src={imgFooter}></img>
                <div className='copyright'>Copyright<div className='sign'>©</div></div>
                </div>
            </div>}
            {isTabletOrMobile &&<div className='footer-mobile'>
                <div>
                <img className='footer-img-mobile' src={imgFooter}></img>
                <div className='copyright'>Copyright<div className='sign'>©</div></div>
                </div>
            </div>}
        </footer>
    );
}
export default Footer;