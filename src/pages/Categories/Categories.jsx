import React,{useState,useContext,useEffect} from 'react';
import { StoreContext } from "../../context/StoreContext";
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Footer from '../../components/Footer/Footer';
import "./Categories.css";
import Loader from '../../components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';
function Categories() {
  const [mealList,setMealList] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const { selectedCategory  } = useContext(StoreContext);
  
    useEffect(()=>{
      const fetchMeals = async () => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
          const data = await response.json();
          console.log("meal",data);
          setMealList([data]);
        } catch (error) {
          setError(error);
        }
        finally{
          setLoading(false);
        }
      };
  
      fetchMeals();
    },[]);
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