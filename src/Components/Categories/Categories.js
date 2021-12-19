import React,{useState,useEffect} from 'react'
import Config from '../../config.json';
import ProductCard from '../Card/ProductCard';
import axios from 'axios';


const Categories = () => {

    const [categorydata, setCategorydata] = useState([])

    const DataRetrive=async()=>{
        const data = await axios.get(Config.categoryApi)
        setCategorydata(data.data)
        console.log(data.data); 
     }

    useEffect(() => {
        DataRetrive();
    }, []);

    return (
        <div>
          {
              categorydata.map((d,i)=>{
                  return(
                      <ProductCard 
                          ProductName={d}
                      />
                  )
              })
          }
        </div>
    )
}


export default Categories
