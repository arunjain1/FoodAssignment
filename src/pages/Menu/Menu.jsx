import React, { useEffect, useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import "./Menu.css"
import Footer from '../../components/Footer/Footer'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Loader from '../../components/Loader/Loader'
import NotFound from '../../components/NotFound/NotFound'

function Menu() {
  const [globalCategory,setGlobalCategory] = useState([]);
  const [localFood,setLocalFood] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const { setSelectedCategory } = useContext(StoreContext);

useEffect(() => {
  const fetchData = async () => {
    try {
        const [response1, response2] = await Promise.all([
            fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian')
        ]);

        if (!response1.ok || !response2.ok) {
            throw new Error('Network response was not ok');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();

        setGlobalCategory([data1]);
        setLocalFood([data2]);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
};

fetchData();
}, []);
  console.log(globalCategory[0]?.categories,"localFood",localFood[0]?.meals);
  if(loading){
    return(
        <Loader/>
    )
  }
  if(error){
    return(
        <NotFound/>
    )
  }
  return (
   <div className='menu'>
      <ExploreMenu category={globalCategory} setCategory={setSelectedCategory}/>
      <FoodDisplay title={"Top Dishes Near You :"} category={localFood}/>
      <Footer />
    </div>
  )
}

export default Menu