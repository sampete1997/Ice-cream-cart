
import './App.css';
import { Component } from 'react'
import Home from './components/Home';
import Cart from './components/Cart';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import CartOperations from './components/CartContext';
import Order from './components/Order';
import OrderDetails from './components/Order/OrderDetails';


class App extends Component {


  render() {
    
    return (
      <CartOperations>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/order' element={<Order/>} />
            <Route path='/order/:orderId' element={<OrderDetails/>}></Route>
          </Routes>
        </div>
      </CartOperations>
    )
  }
}




export default App;
