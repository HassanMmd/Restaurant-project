import "./About.css";
import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { AiOutlineStar } from "react-icons/ai";

function About() {
    const [value, setValue] = React.useState(0);
    const [rate, setRate] = React.useState([]);
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

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const addRate = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "clientRating"), {
                "rating": value,
            });
            setMessage("Done! Thank you for your rating");
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
            setMessage(`Faild!! Check your internet connection to submit`);
        }
    }
    const fetchPost = async () => {
        try {
            await getDocs(collection(db, "rating"))
                .then((querySnapshot) => {
                    if (!querySnapshot) {
                        throw Error('Could not fetch the data')

                    } else if (querySnapshot) {
                        const newData = querySnapshot.docs
                            .map((doc) => ({ ...doc.data(), id: doc.id }));
                        setRate(newData);
                        console.log("wwwwwwwwwww", newData);
                    }
                })
        }
        catch (e) {
            setMessage(`Faild!! Check your internet connection to load the Rating`);
        }
    }
    React.useEffect(() => {
        fetchPost();
    }, [])
    return (
        <div className="about">
            <div className="about-card">
                <div>
                    <h2>About US</h2>
                </div>
                <div className="about-desc-pos">
                    <div className="about-desc">
                        <div>4 Years of success. We are glad to see you</div>
                        <div>Here. Enjoy the 80's music and</div>
                        <div>atmosphere.</div>
                    </div>
                </div>
                <div>
                    <form className="about-rate" onSubmit={addRate}>
                        <label>Rate us:</label>
                        <input type="range" min="0" max="5" value={value} onChange={handleChange}></input>
                        <div className="stars">{value} <AiOutlineStar size={30} /></div>
                        <button type="submit" className="sbmit-btn-about">Submit</button>
                    </form>
                </div>
                <div className="rates">
                    {rate.map((e) => {
                        return (
                            <div className="rate">
                                <div>{e.name}</div>
                                <div className="stars">{e.rate} <AiOutlineStar size={20} color="gray" /></div>
                            </div>)
                    })}
                </div>
                {message}
            </div>
        </div>
    );
}
export default About;