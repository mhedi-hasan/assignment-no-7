
import PropTypes from 'prop-types';
const Cooks = ({cooks,handleTotalTime}) => {
    const {recipe_name,preparing_time,calories}=cooks;
    return (
        <div className='flex w-full  mt-3 '>
            <ul className='flex justify-between text-[#605f5f] w-full py-3 border-[#bebcbc] border-b'>
                <li className='w-20 text-sm'>{recipe_name}</li>
                <li className='w-12 items-center text-center'>{preparing_time} minutes</li>
                <li className='w-12 items-center text-center'>{calories}</li>
            </ul>
            <button onClick={() =>handleTotalTime(cooks)} className='btn justify-end rounded-full bg-[#0be58a]'>Preparing</button>
        </div>
    );
};

Cooks.propTypes ={
    cooks:PropTypes.object.isRequired,
    handleTotalTime: PropTypes.func.isRequired
}
export default Cooks;