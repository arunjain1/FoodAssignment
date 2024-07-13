import React,{useState,useContext,useEffect} from 'react';
import { StoreContext } from "../../context/StoreContext";
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Footer from '../../components/Footer/Footer';
import "./Categories.css";
import Loader from '../../components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';
import useMeal from '../../customHook/useMeal';
function Categories() {
  const { selectedCategory  } = useContext(StoreContext);
  const { loading, error, mealList } = useMeal("https://www.themealdb.com/api/json/v1/1/filter.php",selectedCategory);
    
    console.log("HI",mealList?.meals);
    if(loading){
      return(
          <Loader/>
      )
    }
    if(error || mealList[0]?.meals===null){
      return(
          <NotFound/>
      )
    }
    return (
     <div className='categories'>
        <FoodDisplay title={`${selectedCategory} Meals`} category={mealList}/>
        <Footer />
      </div>
    )
  }


export default Categories