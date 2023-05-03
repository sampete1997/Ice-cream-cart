import { Component } from 'react';
import Cart from '.';
import '../../App.css';
import { CartContext } from '../CartContext';


class CartItem extends Component {

    render() {

        const { name, price, image, id} = this.props
        const { cart, updateCart, deleteItemFromCart } = this.context
        const { quantity } = cart[id] || {};

        return <div className='CartIceCreamData'>
            <img src={image} className='CartIceCreamImags'></img>
            <div className='DetailTag'>
                <p className='NameTag'>{name} </p>
                <p className='PriceTag'>RS.{price} /- </p>
                <div className='Count'>
                    <div className='IncrementBtnDiv'>

                        <button className='IncrementBtn' onClick={() => updateCart(id, quantity + 1,price)}>+</button>
                            <h4>{quantity} </h4>
                        <button disabled={quantity < 2} className='IncrementBtn' onClick={() => updateCart(id, quantity - 1,price)}>-</button>

                    </div>
                    <button className='DeleteBtn' onClick={() => deleteItemFromCart(id)}>Delete Item</button>
                    <h1> Total: {price * quantity}</h1>
                </div>
            </div>
        </div>
    }
}


CartItem.contextType = CartContext

export default CartItem