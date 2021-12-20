import React, { useContext,useEffect } from 'react'
import { DataContext } from '../../Context/cartContext'
import ProductCard from '../Card/ProductCard'

function Cart() {
    const {cart} = useContext(DataContext);

    useEffect(()=>{  
        console.log('Inside Cart');
        console.log(cart);
    },[])
    
    return (

        <div>
        {console.log('Cart from')}
            <h2>Cart Data</h2>
            {cart.map(c=>(
                <ProductCard  ProductName={c.title} image={c.image} visible={false} />
            ))}
            
        </div>
    )
}

export default Cart
