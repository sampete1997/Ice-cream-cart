import react,{Component} from "react";
import './style.css';
import ShowOrderList from "./ShowOrderList";
import { CartContext } from '../CartContext'

class OrderList extends Component{

    constructor(props){

        super(props)
    }


    render(){

         const {totalPrice} =this.context
        const {orderObj,orderNo} = this.props
        let OrderObj = JSON.parse(orderObj)
       

        return <>
            <div className="OrderListBox">
            <h2>Order-ID : {orderNo} </h2>
            
            {console.log('values of obj',Object.values(orderObj))}

                   {Object.keys(OrderObj).map((currId,ind)=>(
                       
                       <ShowOrderList key={ind} productId ={currId} orderNo ={orderNo} quantity = {OrderObj[currId]} />
                       
                   ))}
                
            </div>

            

        </>
    }
}


OrderList.contextType = CartContext
export default OrderList

