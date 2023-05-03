import react, { Component } from "react";
import './style.css'
import { CartContext } from '../CartContext'
import OrderList from "./OrderList";


class Order extends Component {

    constructor(props) {

        super(props)
    }


    render() {

        const { totalPrice } = this.context

        return <div className="ordersContainer">

            <h1>Your Orders</h1> <div>
                {/* <h1>Current order price:{totalPrice}</h1> */}
                
                </div>
            <div className="orderList">
                
                {Object.keys(localStorage).map((currItem,ind) => {

                            console.log('local',localStorage[currItem]);
                    return <OrderList key={ind} orderObj={localStorage[currItem]} orderNo ={currItem}  />
                    
                    
                    
                    
                })}


            </div>

            

        </div>
    }
}

Order.contextType = CartContext

export default Order