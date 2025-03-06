import { useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import FavCard from "./FavCard";
import Searched_meal from "./Searched_meal";
import '../style/favourite.css';
import { Link } from "react-router-dom";

const Favourite=()=>{

    const item=useSelector(Store=>Store.cart.items);
    // console.log(item);
    if(item.length===0)
    return (
        <div style={{color:"black",fontSize:"large",textAlign:"center",fontFamily:" Verdana, Geneva, Tahoma, sans-serif",height:"100vh"}}>
            <h1>Favourite list is empty</h1>
            <h1>Add some meal</h1>
        </div>
    )

    return (
      <div className="fav-card2">
        {
            item.map((data)=>{
                return (
                    <FavCard id={data} key={data}/>
                )
            })
        }
      </div>
    )
}

export default Favourite;