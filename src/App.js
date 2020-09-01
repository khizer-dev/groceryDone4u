import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./assets/css/custom.css";
import HomePage from "./components/homepage/Homepage";
import SideDrawer from "./components/side-drawer/SideDrawer";
import ProductPage from "./components/Pages/product/ProductPage";
import Aboutus from "./components/Pages/about-us/Aboutus";
import Contactus from "./components/Pages/contact-us/Contactus";
import FAQ from "./components/Pages/faq/FAQ";
import Login from './components/Pages/login/Login';
import TermsCondition from './components/Pages/terms-condition/TermsCondition';
import Register from './components/Pages/register/Register';
import CategoryPage from './components/Pages/category/CategoryPage';
// import ProductDetails from './components/Pages/product/product-details/ProductDetails';
import ProductDetails from './components/Pages/product/ProductPage';
import Cart from './components/Pages/cart/Cart';
import Checkout from './components/Pages/checkout/Checkout'


const App = () => {
  return (
    <Router>
      <Fragment>
        <Fade top>
        <div className="App">
          <SideDrawer />
          <Header />
          <section>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/groceryDone4u" component={HomePage} />
              <Route  path="/product" component={ProductPage} />
              <Route  path="/about" component={Aboutus} />
              <Route  path="/contact" component={Contactus} />
              <Route  path="/faq" component={FAQ} />
              <Route  path="/login" component={Login} />
              <Route  path="/terms-and-condition" component={TermsCondition} />
              <Route  path="/register" component={Register} />
              <Route  path="/product-category" component={CategoryPage} />
              <Route  path="/product-detail" component={ProductDetails} />
              <Route  path="/cart" component={Cart} />
              <Route  path="/checkout" component={Checkout} />
              <Route path="*"></Route>
            </Switch>
          </section>
          <Footer />
        </div>
        </Fade>
      </Fragment>
    </Router>
  );
};

export default App;
