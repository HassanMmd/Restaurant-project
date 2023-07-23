import "./Main.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function Main() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div className="container">
            {isDesktopOrLaptop && <section className="section1">
                <article className="Thecard">
                    <div className="card-title">
                        <h1>Our Menu:</h1>
                    </div>
                    <div className="desc">
                        <div>Nice to see you here, check our menu </div>
                        <div>and enjoy your meal in our restaurant</div>
                    </div>
                    <div>
                        <Link to="/Restaurant/Menu/" className="links">Our Menu</Link>
                    </div>
                </article>
                <article className="Thecard">
                    <div className="card-title">
                        <h1>Book A Table:</h1>
                    </div>
                    <div className="desc">
                        <div>Here you can book your table, click</div>
                        <div>the link and customize the details.</div>
                    </div>
                    <div>
                        <Link to="/Restaurant/Book/" className="links">Book A Table</Link>
                    </div>
                </article>
                <article className="Thecard">
                    <div className="card-title">
                        <h1>Opening Hours:</h1>
                    </div>
                    <table>
                        <tr>
                            <th className="desc-days">Saturday</th>
                            <th className="desc-days">Sunday</th>
                            <th className="desc-days">Monday</th>
                            <th className="desc-days">Tuesday</th>
                            <th className="desc-days">Friday</th>
                        </tr>
                        <tr>
                            <td className="desc-time">Open: 10am</td>
                            <td className="desc-time">Open: 8am</td>
                            <td className="desc-time">Open: 9am</td>
                            <td className="desc-time">Open: 9am</td>
                            <td className="desc-time">Open: 9am</td>
                        </tr>
                        <tr>
                            <td className="desc-time">Close:11pm</td>
                            <td className="desc-time">Close:9pm</td>
                            <td className="desc-time">Close:10pm</td>
                            <td className="desc-time">Close:10pm</td>
                            <td className="desc-time">Close:11pm</td>
                        </tr>
                    </table>
                    <div>
                        <Link to="/Restaurant/About/" className="links">About Us</Link>
                    </div>
                </article>
            </section>}
            {isTabletOrMobile && <section className="section1-mobile">
                <article className="Thecard-mobile">
                    <div className="card-title">
                        <h1>Our Menu:</h1>
                    </div>
                    <div className="desc-mobile">
                        <div>Nice to see you here, check our menu </div>
                        <div>and enjoy your meal in our restaurant</div>
                    </div>
                    <div>
                        <Link to="/Restaurant/Menu/" className="links">Our Menu</Link>
                    </div>
                </article>
                <article className="Thecard-mobile">
                    <div className="card-title">
                        <h1>Book A Table:</h1>
                    </div>
                    <div className="desc-mobile">
                        <div>Here you can book your table, click</div>
                        <div>the link and customize the details.</div>
                    </div>
                    <div>
                        <Link to="/Restaurant/Book/" className="links">Book A Table</Link>
                    </div>
                </article>
                <article className="Thecard-mobile">
                    <div className="card-title">
                        <h1>Opening Hours:</h1>
                    </div>
                    <table>
                        <tr>
                            <th className="desc-days">Saturday</th>
                            <td className="desc-time">Open: 10am</td>
                            <td className="desc-time">Close:11pm</td>
                        </tr>
                        <tr>
                            <th className="desc-days">Sunday</th>
                            <td className="desc-time">Open: 8am</td>
                            <td className="desc-time">Close:9pm</td>
                        </tr>
                        <tr>
                            <th className="desc-days">Monday</th>
                            <td className="desc-time">Open: 9am</td>
                            <td className="desc-time">Close:10pm</td>
                        </tr>
                        <tr>
                            <th className="desc-days">Tuesday</th>
                            <td className="desc-time">Open: 9am</td>
                            <td className="desc-time">Close:10pm</td>
                        </tr>
                        <tr>
                            <th className="desc-days">Friday</th>
                            <td className="desc-time">Open: 9am</td>
                            <td className="desc-time">Close:11pm</td>
                        </tr>
                    </table>
                    <div>
                        <Link to="/Restaurant/About/" className="links">About Us</Link>
                    </div>
                </article>
            </section>}
        </div>
    );
}
export default Main;