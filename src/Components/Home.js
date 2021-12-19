import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import config from "../config.json"
import { DataContext } from '../Context/cartContext'
import ProductCard from './Card/ProductCard'



function Home({onFilter,onAddtoCart}) {
  
  const {pro,cat} = useContext(DataContext)
 
    return (
      <div>
        <ul>
          {cat.map(c=>(
            <div>
              <ul>
                <li onClick={()=>onFilter(c)}  >{c}</li>
              </ul>
            </div>
          ))}
        </ul>
        {pro.map(p=>(
          <ProductCard AddToCart={()=>onAddtoCart(p)} key={`${p.id}`} ProductName={p.title} image={p.image} key={p.key} />
        ))}
      </div>
    )
}

export default Home
