import './App.css';
import ProductCard from './Components/Card/ProductCard';
import NavBar from './Components/NavBar/NavBar'
import LandingImage from './assets/LandingImage.jpg';
import Categories from './Components/Categories/Categories';
import Home from './Components/Home';
import { DataContext } from './Context/cartContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from "./config.json"
import Cart from './Components/ShoppingCart/Cart';
// import LandingImage from './assets/LandingImage.jpg';
import {BrowesrRouter,Link , Router,Route,Switch} from 'react-router-dom';

function App() {

  const [products,SetProducts] = useState([])
  const [Category, setCategory] = useState([])
  const [filter, setFilter] = useState("")
  const [cart, setCart] = useState([])

  console.log(cart)

  useEffect(async()=>{
    const data = await axios.get(filter === "" ? config.productsApi : config.productsApi + `/category/${filter}` )
    const Categories = await axios.get(config.categoryApi)
    setCategory(Categories.data)
    SetProducts(data.data)
  },[filter])

  return (
    <DataContext.Provider value={{pro:products,cat:Category,cart}}>
          <NavBar />
          <img 
          src={LandingImage} alt="" 
          style={{width:'70%',display:'inline-flex'}}
          />
        <div className="App">
          <Home onFilter={(c)=>setFilter(c)} onAddtoCart={(p)=>setCart([...cart,p])} />
          <Switch>
          <Route path="/Cart" render={Cart} />
          </Switch>
        </div>

    </DataContext.Provider>
  );
}

export default App;
