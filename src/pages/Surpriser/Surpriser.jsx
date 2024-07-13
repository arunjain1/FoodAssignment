import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';
import "./Surpriser.css"

function Surpriser() {
  const [meal,setMeal] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  
    useEffect(()=>{
      const fetchMeals = async () => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
          const data = await response.json();
          console.log("meal",data);
          setMeal([data.meals[0]]);
        } catch (error) {
          setError(error);
        }
        finally{
          setLoading(false);
        }
      };
  
      fetchMeals();
    },[]);
    console.log("HI",meal);
    if(loading){
      return(
          <Loader/>
      )
    }
    if(error ){
      return(
          <NotFound/>
      )
    }
  return (
      meal.length!==0?<div className="card">
        <img src={meal[0].strMealThumb} alt={"img"} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{meal[0].strMeal}</h2>
          <p className="card-description">{meal[0].strInstructions}</p>
        </div>
      </div>:null
  )
}

export default Surpriser