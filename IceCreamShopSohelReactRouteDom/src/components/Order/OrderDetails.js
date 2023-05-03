import react, { Component } from "react";
import './style.css'
import { useParams } from 'react-router-dom'
const products =require('./products.json')


function OrderDetails() {



    const orderId = useParams().orderId

    let CurrItem  = products[orderId]

    return <div className="ordersContainer">

        <h1>Item-Id :0{orderId} </h1>

        <div className='IceCreamData'>

            <img src={CurrItem.image} className='IceCreamImags'></img>
            <div className='DetailTag'>
                <p className='NameTag'>{CurrItem.name} </p>
                <p className='PriceTag'>RS.{CurrItem.price} /- </p>
                

            </div>

        </div>

    </div>
}




export default OrderDetails