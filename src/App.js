import React, {useState} from 'react';
import './App.css';
import foods from './foods'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood'
import SearchFood from './components/SearchFood';
function App() {
  let fields= false
  const [allFoods, setAllFoods] = useState(foods)
  const [showForm, setShowForm  ]= useState(false)

    const addFood =(objectFood)=>{  
      const showAllFoods = [...allFoods]
      showAllFoods.push(objectFood)
      setAllFoods(showAllFoods)
    }
     
    
    const search=(e)=>{
      if(e === ""){
        setAllFoods(foods)
      }else{
        const searchFoods = allFoods.filter(allFoods => allFoods.name.toLowerCase().includes(e.toLowerCase()))
      setAllFoods(searchFoods)
      }      
    }
    const handleDelete=(ele)=>{      
      const arrayDelete= allFoods.filter(foods => foods.name !== ele) 
      setAllFoods(arrayDelete)
    }
    const handleShowAdd=()=>{
       return setShowForm(showForm => !showForm)
    }
   
    
  return (   
    <div className='lol'>
      <div className="containerForm">
        <div className='cardForm'>
         <button onClick={()=>handleShowAdd()}>Add food</button> 
       {showForm &&
            <AddFood addNewFood={addFood} fieldsCheck={fields}></AddFood>
            
        } 
        <hr/>
        <h3>Search your food</h3>
            <SearchFood onFood={search}></SearchFood> 
      </div>  
      </div>
    
    <div  className="containerApp">  
       
        {allFoods.map(e=>{            
            return (       
              <div key={e.name}className='card'>
                <FoodBox food={e} onDelete={handleDelete}></FoodBox>
              </div>   
            )                                                   
        })}  
               
    </div> 
     </div> 
  );
}
export default App;
