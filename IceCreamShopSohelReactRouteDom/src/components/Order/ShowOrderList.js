import react, { Component } from "react";
import './style.css';
import { CartContext } from "../CartContext";
import { Link } from 'react-router-dom'




class ShowOrderList extends Component {

    constructor(props) {

        super(props)
    }

    
    render() {

        const { products,calculatePrice} = this.context;
        const { productId, quantity} = this.props
        console.log('productId', productId);

        return <div>
          <Link to={'/order/'+this.props.productId } className='links'>  <div className="OrderDivList">

                
                
                <p>Name:{products[productId].name}</p>
                <p>Price:{products[productId].price}</p>
                <p>Qty:{quantity}</p>
                <p>total:{quantity*products[productId].price}</p>
                
                {console.log('showorder')}
            </div>
            </Link>

            

        </div>
    }
}


ShowOrderList.contextType = CartContext;
export default ShowOrderList

