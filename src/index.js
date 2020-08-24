import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/css/animate.css'
import './assets/css/bootstrap.min.css';
import './assets/css/iconfont.css';
import './assets/css/isotope.css';
import './assets/css/jquery-ui.css';
import './assets/css/magnific-popup.css';
import './assets/css/navigation.min.css';
// import './assets/css/font-awesome.min.css';
// import './assets/css/plugins.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/responsive.css';
import './assets/css/style.css';
import './assets/css/style.css.map';
import './assets/css/vertical-menu.css';
// import './assets/css/woocommerce.css';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
