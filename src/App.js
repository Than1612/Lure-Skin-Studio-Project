import logo from './logo.svg';
import './input.css';
import Navbar from './components/Navbar';
import Arrivals from './components/Arrivals';
// import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Hero/> */}
      <Arrivals/>
    </div>
  );
}

export default App;
