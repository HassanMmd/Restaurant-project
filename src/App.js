import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
