import '../style/card.css';

const Card=({strMeal,strMealThumb})=>{
     
    return (
     <div className="card">
      <div className="card-img">
       <img src={strMealThumb}/>
      </div>
      <div className="card-info">
       <h4>{strMeal}</h4>
      </div>
     </div>
    )
}

export default Card;