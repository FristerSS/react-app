import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import './productList.css';


const ProductListPage = (props) =>
{
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);


    useEffect(() =>
    {

        if(!loading)
        {
            fetch('https://dummyjson.com/products')
            .then(res => 
                {   
              
                    if(res.status !== 200)
                    {
                        throw new Error('ERRRORRR')
                    }else
                    return res.json()
                    
                })
            .then(data => {
                setData(data.products)
            })
            .catch(err =>
                {
                    throw new Error(err);
                })
            .finally(() =>
            {
                setLoading(true)
                console.log('Loading is done')
            })
        }
      
        

    })

    let list;
    if(loading)
    {   
        console.log(data)
        list = data.map((product) => { 
           return <article key={product.id} style={{display:"flex", flexDirection:'column', alignItems:'center', maxHeight: '20vh', width: '20vw'}}>
                <NavLink to={"/product/" + product.id}><h2>{product.title}</h2></NavLink>
                <img src={product.images[0]} alt={product.title} style={{maxWidth: '75%', maxHeight: '60%'}}></img>
                <hr/>
            </article> 
        })
   
    }


    return(
        <>
        <div id="ProductList" style={{display:"flex", flexWrap:'wrap', justifyContent:'space-around'}}>{list}</div>
        
        </>
        
    )
}

export default ProductListPage;