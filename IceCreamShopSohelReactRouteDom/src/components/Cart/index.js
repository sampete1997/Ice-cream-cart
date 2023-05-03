import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css"
import "./style.css"
import { CartContext } from "../CartContext";
import CartItem from "./cartItem"


class Cart extends Component {

    render() {

        const { products, cart ,orderObjList,deleteItemFromCart} = this.context

        return <div className="CartContainer">

            {
                Object.keys(cart).length ? <div className="CartItems">

                    {Object.keys(cart).map((Index, ind) => (

                        <CartItem key={ind} id={Index} name={products[Index].name} price={products[Index].price} image={products[Index].image} />

                    ))} </div> : <div className="cartEmpty"><h1 >Empty Cart</h1></div>
            }

            <div className='checkout'>
                
                <p>Add Items In Cart</p>

                <Link to={'/order'}  ><button className='checkOutbtn' onClick={
                    ()=> {
                        console.log('your ORderOBJ',orderObjList);
                        localStorage.setItem('#101'+ Math.floor((Math.random() * 100) + 1) ,JSON.stringify(orderObjList))

                        Object.keys(cart).map((Index) => {
                            return deleteItemFromCart(Index)
                            
                        }
                        )
                        
                        Object.keys(orderObjList).map((currId)=>{

                            // calculatePrice((products[currId].price)*orderObjList[currId])
                        })
                    }
                }>checkOut</button></Link>
            </div>
        </div>
    }
}

Cart.contextType = CartContext
export default Cart