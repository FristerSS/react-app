import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './product.css';


const ProductsPage = (props) =>
{     
    const location = useLocation();
    const [data, setData]= useState();
    const [loading, setLoading] = useState(false);
    const id = location.pathname.split('/')[2];

    useEffect(() =>
    {
        if(!loading)
        {
            fetch('https://dummyjson.com/products/'+id)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => {
                setLoading(false);
                throw new Error(err);
                
            })
            .finally(() =>
            {
                setLoading(true);
            })
        }
    
    })

    let img = [];

    if(loading)
    {
       img = data.images.map((img) => <img src={img} alt={data.title}></img>)

        console.log(img)
    }
 
        return(
            <div id="Product">
                {loading ? <h2>{data.title }</h2>: 'Ładowanie...'}
                {loading ? <p>{data.description }<br/><h3 style={{marginTop: "10px"}}>Price: {data.price}$</h3> </p>: 'Ładowanie...'}
                <article>
                {loading ? data.images.map((img) => <img key ={img} src={img} alt={data.title}></img>) : 'Ładowanie...'}
                </article>
                <NavLink to="/products">Cofnij</NavLink>
            </div>
        )
    

    
    
}

export default ProductsPage;