import './App.css';
import { Switch, Route } from "react-router-dom";


//Components
import NavBar from "./components/Navbar";
import Home from "./views/Home";
import Products from "./views/Products";
import Product from "./components/Product";
import Cart from "./views/Cart";
import Favorites from "./views/Favorites";
import About from "./views/About";
import Contact from './views/Contact';
import Checkout from './views/Checkout';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/favs" exact component={Favorites} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </>
  );
}

export default App;
