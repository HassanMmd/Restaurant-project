import "./Book.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import React from "react";
import { useMediaQuery } from 'react-responsive';

function Book() {
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [numberPeople, setNumberPeople] = React.useState("");
    const [location, setLocation] = React.useState("inside");
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [period, setPeriod] = React.useState("");
    const [message, setMessage] = React.useState("");
    const firebaseConfig = {
        apiKey: "AIzaSyDJKrYqV1dJQKyICBX3Kl1Tn2cZnhqCz8Q",
        authDomain: "restuarant-d681f.firebaseapp.com",
        projectId: "restuarant-d681f",
        storageBucket: "restuarant-d681f.appspot.com",
        messagingSenderId: "46179115586",
        appId: "1:46179115586:web:fd55208ec48bda45adc3db"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    const addBook = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "books"), {
                "name": name,
                "phone": phone,
                "email": email,
                "numberPeople": numberPeople,
                "location": location,
                "date": date,
                "time": time,
                "period": period,
            });
            setMessage("Done! Thank you for booking");
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            setMessage(`Faild!! Check your internet connection`);
            console.error("Error adding document: ", e);
        }
    }
    function changeHandlerName(e) {
        setName(e.target.value);
    }
    function changeHandlerPhone(e) {
        setPhone(e.target.value);
    }
    function changeHandlerEmail(e) {
        setEmail(e.target.value);
    }
    function changeHandlerNumberPeople(e) {
        setNumberPeople(e.target.value);
    }
    function changeHandlerdate(e) {
        setDate(e.target.value);
    }
    function changeHandlertime(e) {
        setTime(e.target.value);
    }
    function changeHandlerperiod(e) {
        setPeriod(e.target.value);
    }
    function changeHandlerIn() {
        setLocation("inside");
    }
    function changeHandlerOut() {
        setLocation("outside");
    }
    return (
        <div className="book">
            <div className="book-card">
                <div>
                    <h2>Book A Table:</h2>
                </div>
                <div>
                    {isDesktopOrLaptop && <form className="book-form" onSubmit={addBook}>
                        <div className="personal-info">
                            <h4>Personal Info</h4>
                            <div className="name">
                                <label htmlFor="name-text">Your Name:</label>
                                <input type="text" id="name-text" className="input-text" name="name" onChange={changeHandlerName} required></input>
                            </div>
                            <div className="phone">
                                <label htmlFor="phone-text">Phone Number:</label>
                                <input type="text" id="phone-text" className="input-text" name="phone" onChange={changeHandlerPhone} required></input>
                            </div>
                            <div className="email">
                                <label htmlFor="email-text">Your Email:</label>
                                <input type="email" id="email-text" className="input-text" name="email" onChange={changeHandlerEmail} required></input>
                            </div>
                        </div>
                        <div className="book-details">
                            <h4>Booking Details</h4>
                            <div className="number">
                                <label htmlFor="number-text">Number of people: </label>
                                <input type="number" id="number-text" className="people-number-text" max="10" min="1" name="numberPeople" onChange={changeHandlerNumberPeople} required></input>
                            </div>
                            <div className="location">
                                <label htmlFor="location-text">Location: </label>
                                <input type="radio" className="location-text" id="Inside" name="location" onChange={changeHandlerIn} required></input>
                                <label className="inside" htmlFor="Inside">Inside</label>
                                <input type="radio" className="location-text" id="Outside" name="location" onChange={changeHandlerOut} required></input>
                                <label className="outside" htmlFor="Outside">Outside</label>
                            </div>
                            <div className="date">
                                <label htmlFor="date-text">Date: </label>
                                <input type="date" id="date-text" className="date-text" name="date" onChange={changeHandlerdate} required></input>
                            </div>
                            <div className="time">
                                <label htmlFor="am-pm">Time: </label>
                                <input type="number" id="time-text" className="time-text" min="1" max="12" name="time" onChange={changeHandlertime} required></input>
                                <select id="am-pm" className="am-pm" name="period" onChange={changeHandlerperiod} required>
                                    <option value="am">Am</option>
                                    <option value="pm">Pm</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="sbmit-btn-book">Submit</button>
                        {message}
                    </form>}

                    {isTabletOrMobile && <form className="book-form" onSubmit={addBook}>
                        <div className="personal-info">
                            <h4>Personal Info</h4>
                            <div className="name">
                                <label htmlFor="name-text">Your Name:</label>
                                <input type="text" id="name-text" className="input-text-mobile" name="name" onChange={changeHandlerName} required></input>
                            </div>
                            <div className="phone">
                                <label htmlFor="phone-text">Phone Number:</label>
                                <input type="text" id="phone-text" className="input-text-mobile" name="phone" onChange={changeHandlerPhone} required></input>
                            </div>
                            <div className="email">
                                <label htmlFor="email-text">Your Email:</label>
                                <input type="email" id="email-text" className="input-text-mobile" name="email" onChange={changeHandlerEmail} required></input>
                            </div>
                        </div>
                        <div className="book-details">
                            <h4>Booking Details</h4>
                            <div className="number">
                                <label htmlFor="number-text">Number of people: </label>
                                <input type="number" id="number-text" className="people-number-text" max="10" min="1" name="numberPeople" onChange={changeHandlerNumberPeople} required></input>
                            </div>
                            <div className="location">
                                <label htmlFor="location-text">Location: </label>
                                <input type="radio" className="location-text" id="Inside" name="location" onChange={changeHandlerIn} required></input>
                                <label className="inside" htmlFor="Inside">Inside</label>
                                <input type="radio" className="location-text" id="Outside" name="location" onChange={changeHandlerOut} required></input>
                                <label className="outside" htmlFor="Outside">Outside</label>
                            </div>
                            <div className="date">
                                <label htmlFor="date-text">Date: </label>
                                <input type="date" id="date-text" className="date-text" name="date" onChange={changeHandlerdate} required></input>
                            </div>
                            <div className="time">
                                <label htmlFor="am-pm">Time: </label>
                                <input type="number" id="time-text" className="time-text" min="1" max="12" name="time" onChange={changeHandlertime} required></input>
                                <select id="am-pm" className="am-pm" name="period" onChange={changeHandlerperiod} required>
                                    <option value="am">Am</option>
                                    <option value="pm">Pm</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="sbmit-btn-book">Submit</button>
                        {message}
                    </form>}
                </div>
            </div>
        </div>
    );
}
export default Book;