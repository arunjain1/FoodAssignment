import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from "react"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import AppDownload from "../../components/AppDownload/AppDownload"
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <div className="home">
      <Header type={"meal"}/>
      <Header type={"favorite"}/>
      <Header type={"randomMeal"}/>
      {/* <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/> */}
      <AppDownload/>
      <Footer />
    </div>
  )
}

export default Home
