import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Cooking from "./components/Cooking/Cooking"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Recipes from "./components/Recipes/Recipes"
import RecipesHeading from "./components/RecipesHeading/RecipesHeading"

function App() {
  const [cooking,setCooking]=useState([])
  const [totalTime,setTotalTime]=useState([])
  const handleAddToCooking=recipe=>{
    const newCooking=[...cooking,recipe]
    setCooking(newCooking)
  }
  const handleTotalTime= time=>{
    const newCooks=[...totalTime,time]
    setTotalTime(newCooks)
  }
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipesHeading></RecipesHeading>
      <div className="md:flex lg:mt-12 mt-5 lg:w-[90%] mx-auto gap-4">
          <Recipes handleAddToCooking={handleAddToCooking}></Recipes>
          <Cooking cooking={cooking} handleTotalTime={handleTotalTime}></Cooking>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
