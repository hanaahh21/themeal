import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Card from "./Card";
import Shimmer2 from "./Shimmer2";
import "../style/search_meal.css"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { additems} from "../utils/Cartslice";


const Searched_meal=()=>{

    const {id}=useParams();
    const[meal,setMeal]=useState(null);
    

    useEffect(()=>{
        getdata();
    },[])

    async function getdata() {
        const data1 = await fetch(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id
        );

        const mealdata=await data1.json();
        setMeal(mealdata?.meals[0]);
        // console.log(mealdata.meals[0]);
    }
    
    const item=useSelector((Store)=>Store.cart.items);
    const dispatch=useDispatch();

    const handlevent=()=>{
      dispatch(additems(meal.idMeal));
    }

    if(!meal)
    return <Shimmer2/>;

    var s="strIngredient";
    var s2="strMeasure";

    var temp="";
    var temp2="";

    var ing="";
    return (
      <div className="searched_meal">
        <div className="search1">

        <div className="search1-2">
        <Card {...meal}/>
        </div>

        <div className="search1-1">
        <Link to={meal?.strYoutube} className="youtube"><Icon icon="mdi:youtube" className="icon5"/> <h1>Watch recipe</h1></Link>
        <button class="button-3" onClick={()=>handlevent()}>Save this recipe</button>
        </div>
    
       </div>

        <div className="search3">
          <h1>Ingredients</h1>
          <div className="search2"> 
          {Array(20).fill("").map((e,index)=>(
            temp=s+(index+1), temp2=s2+(index+1),ing=meal?.[temp],ing?
            
              <div className="container">
              <img src={"https://www.themealdb.com/images/ingredients/"+ing+".png"}/>
            <h1>{meal?.[temp2]} {ing}</h1>
              </div>
              :<h1></h1>
          ))}
          </div>
          <h1>Instruction</h1>
          <p className="instruction"> 
            {meal?.strInstructions.split(".").join("\n")}
          </p>
        </div>
        
         

         
      </div>
    )
}

export default Searched_meal;