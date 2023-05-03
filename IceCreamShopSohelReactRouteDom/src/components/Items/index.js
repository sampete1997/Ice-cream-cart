import { Component } from 'react';
import '../../App.css'
import { CartContext } from '../CartContext';
import {Link} from 'react-router-dom'

class Items extends Component {

    constructor(props) {

        super(props)

        this.state ={
            CheckArrayId :[]
        }

    }

    addToCart =()=>{
        alert(this.props.name+' Added Into Cart')
        const { updateCart,addOrderList ,orderObjList, ZerocalculatePrice } = this.context;
        
        updateCart(this.props.id)
        addOrderList(this.props.id)
        console.log('your OrderOBJ',orderObjList);
        ZerocalculatePrice(0)
        
    }



    render() {


        const { name, price, image  } = this.props
      
        return <div className='IceCreamData'>
 <Link to={'/order/'+this.props.id } className='links'>
            <img src={image} className='IceCreamImags'></img>
            <div className='DetailTag'>
                <p className='NameTag'>{name} </p>
                <p className='PriceTag'>RS.{price} /- </p>
                <button className='CartBtn' onClick={this.addToCart}>Add To Cart</button>
        
            </div>
</Link>
        </div>

    }
}


Items.contextType = CartContext
export default Items;
