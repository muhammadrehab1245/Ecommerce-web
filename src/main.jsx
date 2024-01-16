import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './app/store.jsx'
import './index.css'
//import { FetchallproductsAsync } from './features/Itemslice.jsx'
import { FetchOrderAsync } from './features/Orderslice.jsx'
import { FetchcartAsync } from './features/Cartslice.jsx'

//store.dispatch(FetchallproductsAsync2());
store.dispatch(FetchOrderAsync());
store.dispatch(FetchcartAsync());
ReactDOM.createRoot(document.getElementById('root')).render(
 //<React.StrictMode>
 <Provider store={store}>
    <App />
 </Provider>
 // </React.StrictMode>,
)
