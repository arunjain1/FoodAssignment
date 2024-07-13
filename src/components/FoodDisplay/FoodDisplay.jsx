
import "./FoodDisplay.css"
import FoodItem from "../FoodItem/FoodItem"

const FoodDisplay = ({category,title}) => {
    console.log(category[0]?.meals);
  return (
    
    <div className="food-display" id="food-display">

        <h2> {title} </h2>

        <div className="food-display-list">
            {category[0].meals.map((item,index)=>{
              return(<>
              <FoodItem key={index} 
                food={item}
                id={item.idMeal} name={item.strMeal} 
                image={item.strMealThumb}/>
                
              </>)
            })}
        </div>
      
    </div>
  )
}

export default FoodDisplay
