import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';
import "./Surpriser.css"
import useMeal from '../../customHook/useMeal';

function Surpriser() {
  const { loading, error, mealList } = useMeal("https://www.themealdb.com/api/json/v1/1/random.php","");
    console.log("HI",mealList);
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
      mealList.length!==0?<div className="card">
        <img src={mealList[0].meals[0].strMealThumb} alt={"img"} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{mealList[0].meals[0].strMeal}</h2>
          <p className="card-description">{mealList[0].meals[0].strInstructions}</p>
        </div>
      </div>:null
  )
}

export default Surpriser