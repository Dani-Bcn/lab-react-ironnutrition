import React,{useState} from 'react'

export default function AddFoo({addNewFood, fieldsCheck}) {
    const [name, setName] =useState("")
    const [calories, setCalories] =useState("")
    const [image, setImage] =useState("")
    const [servings, setServings] =useState("")
    const[field,setField] =useState(fieldsCheck)
    const onSend=(e)=>{
        e.preventDefault();
        const object={
          name:name,
          calories:calories,
          image:image,
          servings:servings,
        }
        if(Object.values(object).includes("")){  
          setField(true)
        }else{
          setField(false)
          addNewFood(object) 
        }              
    }  
  return (
    <div>       
    <form onSubmit={onSend}>
      <input type="text" value={name}  placeholder="Name" onChange={ele=> setName(ele.target.value)}></input>
      <input type="number" min={0} value={calories} placeholder="Calories" onChange={ele=> setCalories(parseInt(ele.target.value))}></input>
      <input type="text"  value={image} placeholder="Image" onChange={ele=> setImage(ele.target.value)}></input>
      <input type="number"   min={0} value={servings} placeholder="Servings" onChange={ele=> setServings(parseInt(ele.target.value))}></input>
      <button type='submit'>Send</button>
      {field &&
        <p style={{marginTop:"10px"}}>All fields must be filled</p>
      }     
    </form>
    </div>
  )
}
