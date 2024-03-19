import PropTypes from 'prop-types';
import Cooks from '../Cooks/Cooks';
const Cooking = ({cooking,handleTotalTime}) => {
    return (
        <div className="md:w-2/6">
            <div className="border-[#959595] border-opacity-70 border-2 rounded-lg py-6 px-4">
                <div>
                    <h2 className="border-[#bebcbc] pb-2 border-b-[1.5px] text-center font-semibold text-2xl ">Want to cook: {cooking.length}</h2>
                    <ul className="flex justify-between w-60 py-3">
                        <li>Name</li>
                        <li>Time</li>
                        <li>Calories</li>
                    </ul>
                    {
                        cooking.map(cooks =><Cooks key={cooks.id} cooks={cooks} handleTotalTime={handleTotalTime}></Cooks>)
                    }
                </div>
                <div className="mt-5">
                    <h2 className="border-[#bebcbc] pb-2 border-b-[1.5px] text-center font-semibold text-2xl ">Want to cook: {handleTotalTime.length}</h2>
                    <ul className="flex justify-between py-3">
                        <li>Name</li>
                        <li>Time</li>
                        <li>Calories</li>
                    </ul>
                    <ul className=" flex justify-end gap-5 pt-3">
                        <li>Total Time=</li>
                        <li>Total calories=</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
Cooking.propTypes ={
    cooking: PropTypes.array.isRequired,
    handleTotalTime: PropTypes.func.isRequired
}
export default Cooking;