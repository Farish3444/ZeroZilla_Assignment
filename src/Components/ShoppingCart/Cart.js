import React, { useContext } from 'react'
import { DataContext } from '../../Context/cartContext'
import ProductCard from '../Card/ProductCard'

function Cart() {
    const {cart} = useContext(DataContext)
    return (
        <div>
            <h2>Cart Data</h2>
            {cart.map(c=>(
                <ProductCard  ProductName={c.title} image={c.image} visible={false} />
            ))}
            
        </div>
    )
}

export default Cart
