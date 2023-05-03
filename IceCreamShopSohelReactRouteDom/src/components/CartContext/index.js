import React from "react";



const CartContext = React.createContext({
    cart: {},
    products: [],
    totalItemPrice: 0,
    totalPrice:0,
    orderObjList:{},
   
    calculatePrice: () => {},
    updateCart: () => {},
    deleteItemFromCart: () => {},
    addOrderList:()=>{},
    ZerocalculatePrice :()=>{}
   
})



class CartOperations extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: {},
            products: [],
            totalItemPrice: 0,
            totalPrice:0,
            orderObjList:{},
            
        }
    }


    componentDidMount () {
        fetch('products.json')
        .then(res => res.json())
        .then(res => {
            this.setState({
                products: res
            })
        })
    }

    calculatePrice = (price) => {
        this.setState(prevState => ({
            totalPrice: prevState.totalPrice + price
        }))
    }

    ZerocalculatePrice = (price) => {
        this.setState(prevState => ({
            totalPrice: price
        }))
    }



    updateCart = (id, quantity = 1,Itemprice=0) => {
        this.setState(prevState => ({
                cart: {
                    ...prevState.cart, 
                    [id]: {
                        ...prevState.cart?.[id],
                        quantity: quantity
                    }

                },

                
        }))

        
        this.addOrderList(id,quantity)
    }

    deleteItemFromCart = (id) => {
        this.setState(prevState => {
            const { [id]: value , ...rest } = prevState.cart || {}
            return {
                cart: {
                    ...rest
                }
            }

        })
    }

    addOrderList = (id,quantity=1) =>{
        this.setState(prevState => ({
            orderObjList: {...prevState.orderObjList,[id]:quantity}
        }))
    }




    render() {
        return <>
            <CartContext.Provider value={{
                cart: this.state.cart,
                products: this.state.products,
                totalItemPrice: this.state.totalItemPrice,
                totalPrice:this.state.totalPrice,
                orderObjList:this.state.orderObjList,
                checkOut:this.state.checkOut,
                calculatePrice: this.calculatePrice,
                updateCart: this.updateCart,
                deleteItemFromCart: this.deleteItemFromCart,
                addOrderList:this.addOrderList,
                ZerocalculatePrice :this. ZerocalculatePrice ,
                
            }}>
                {this.props.children}
            </CartContext.Provider>
        </>
    }


}


export default CartOperations

export { CartContext }