import { Icon } from '@iconify/react';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeitems } from '../utils/Cartslice';
import '../style/favCard.css';
import Shimmer3 from './Shimmer3';
import { Link } from 'react-router-dom';


const FavCard=({id})=>{
     
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
    
    const dispatch=useDispatch();
    const handlevent=()=>{
        dispatch(removeitems(meal?.idMeal));
    }

    if(!meal)
    return <Shimmer3/>
    
    return (
     <div className="fav-card">
      
        <div className="fav-card-img">
        <Link to={"/favourite/searched/"+meal.idMeal} className='fav-card-link'>
            <img src={meal?.strMealThumb}/>
        </Link>
      </div>
      <div className="fav-card-info">
       <h4>{meal?.strMeal}</h4>
       <div>
       <Icon icon="pajamas:remove" className='icon-6' onClick={()=>handlevent()}/>
       </div>
      </div>
     </div>
    )
}

export default FavCard;