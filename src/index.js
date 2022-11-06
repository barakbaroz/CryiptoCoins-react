import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bitcoin from './pictures/b.webp';
import bnb from './pictures/c.webp';
import ethereum  from'./pictures/e.webp';
import tether from './pictures/t.webp';





 const  COINS=[{name:'Bitcoain',price: 'Rs.1343433',precent: -0.75,marketcap:'Rs 44,433,322,323' ,src:Bitcoin},
       {name:'Ethereum',price: 'Rs.1343433',precent: 0.75,marketcap:'Rs 44,433,322,323',src:ethereum},
       {name:'Tether',price: 'Rs.1343433',precent: 2,marketcap:'Rs 44,433,322,323',src:tether},
       {name:'BNB',price: 'Rs.1343433',precent: -1,marketcap:'Rs 44,433,322,323',src:bnb},

      ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App coins={COINS} />
  </React.StrictMode>
);


  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
