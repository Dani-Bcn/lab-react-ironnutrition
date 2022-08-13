import React from 'react'
import '../App.css';

export default function FoodBox({food,onDelete}) {
  return (    
    <div>  
        <h3>{food.name}</h3>
        <hr/>
        <img src={food.image} alt="ImgFood" />
        <p>Calories: {food.calories}</p>      
        <p>Servings: {food.servings}</p>
        <button  onClick={()=>onDelete(food.name)}>Delete</button>
    </div>
  )
}
