import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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


const App = () => {
  return (
    <Router>
      <Fragment>
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
              <Route path="*"></Route>
            </Switch>
          </section>
          <Footer />
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
