import logo from './logo.svg';
import './input.css';
import Navbar from './components/Navbar';
import Arrivals from './components/Arrivals';
import BestSelling from './components/BestSelling';
import Hero from './components/Hero';
import Insta from './components/Insta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App overflow-x-hidden" style={{background: "#F6E7E5"}}> 
      <Navbar/>
      <Hero/>
      <Arrivals/>
      <BestSelling/>
      <Insta/>
      <Footer/>
    </div>
  );
}

export default App;
