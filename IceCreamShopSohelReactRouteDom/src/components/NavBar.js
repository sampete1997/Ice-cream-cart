import '../App.css'

import { Link } from 'react-router-dom'

export function NavBar() {


    return <> <div className='IceCreamcontainer' >

        <Link className='IceCreamHeading' to={'/'}> <h1 >Ice-Cream Shop</h1></Link>

        <div >

            <Link to={'/Cart'}> <img src='https://img.icons8.com/ios-filled/344/shopping-cart-loaded--v1.png' className='CartImg'></img></Link>
            <Link to={'/order'} className='orderHead' ><h2>Orders</h2> </Link>
            </div>


    </div>
    </>

}