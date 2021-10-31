import './App.css';
import { Switch, Route } from "react-router-dom";


//Components
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";

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
      </Switch>
    </>
  );
}

export default App;
