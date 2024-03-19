import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
const Recipe = ({recipe,handleAddToCooking}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=recipe;
    return (
        <div className='shadow-2xl border-gray-300 border-2 px-4 py-5 rounded-lg'>
            <img className='rounded-lg h-48 w-full' src={recipe_image} alt={`The picture of the food ${recipe_name}`} />
            <h2 className='font-bold text-[21px] pt-2'>{recipe_name}</h2>
            <h3 className='py-3 text-[#959595]'>{short_description}</h3>
            <h4 className='font-semibold text-[16px]'>Ingredients : {ingredients.length}</h4>
            <div className='ml-3 py-3 border-b text-[#959595] border-[#959595]'>
                <li>1 can (400g) black beans </li>
                <li>1 cup cooked brown rice</li>
                <li>1/2 cup chopped red onion</li>
                {/* <li>
                    {
                        ingredients.map(ingredient =><span>{ingredient}</span>)
                    }
                </li> */}
            </div>
            <div className='flex items-center gap-4 py-3'>
                <span className='flex items-center gap-2'>
                <IoTimeOutline className='text-[22px]' />
                <h5>{preparing_time} minutes</h5>
                </span>
                <span className='flex items-center gap-2'>
                <FaFireAlt className='text-[18px]' />
                <h5>{calories} calories</h5>
                </span>
            </div>
            <button onClick={() =>handleAddToCooking(recipe)} className='btn bg-[#0be58a]'>Want to Cook</button>
        </div>
    );
};
Recipe.propTypes ={
    recipe:PropTypes.object.isRequired,
    handleAddToCooking: PropTypes.func.isRequired
}
export default Recipe;