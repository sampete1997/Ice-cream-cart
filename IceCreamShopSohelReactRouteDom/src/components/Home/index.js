// import React, { Component } from "react";
import { Component } from 'react'
import '../../App.css'
import { CartContext } from '../CartContext'
import Items from '../Items'




class Home extends Component {

    constructor(props){
        super(props)

        
    }

   render(){

    const {products } = this.context

    console.log(products)
    return <div className="home">

        <div className="Items">

            {products.map((curr, ind) => (

                <Items key={ind} id = {ind} name = {curr.name} price = {curr.price} image ={curr.image} />
                
                
            ))} </div>


    </div>
    }

}


Home.contextType = CartContext
export default Home