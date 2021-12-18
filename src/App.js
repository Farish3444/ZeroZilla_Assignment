import './App.css';
import ProductCard from './Components/Card/ProductCard';
import NavBar from './Components/NavBar/NavBar'
import LandingImage from './assets/LandingImage.jpg';
import Categories from './Components/Categories/Categories';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Categories />
    </div>
  );
}

export default App;
