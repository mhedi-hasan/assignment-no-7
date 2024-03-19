import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleAddToCooking}) => {
    const [recipes,setRecipes] =useState([])
    useEffect(()=>{
        fetch('recipes.json')
        .then(res =>res.json())
        .then(data =>setRecipes(data))
    },[])
    return (
            <div className="md:w-4/6 grid md:grid-cols-2 gap-4">
                {/* <h1 className="font-bold text-2xl">Our Recipes Section: {recipes.length}</h1> */}
                {
                    recipes.map(recipe =><Recipe 
                        key={recipe.recipe_id} 
                        recipe={recipe}
                        handleAddToCooking={handleAddToCooking}
                    ></Recipe>)
                }
            </div>
    ); 
};
Recipes.propTypes ={
    handleAddToCooking: PropTypes.func.isRequired,
    handleTotalTime: PropTypes.func.isRequired
}
export default Recipes;