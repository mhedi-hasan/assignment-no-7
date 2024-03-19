import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
    return (
        <div className="lg:w-[90%] mx-auto">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex="0" className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a className=" btn btn-ghost font-bold text-2xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-[18px] px-1">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <label className="input  hidden bg-slate-200 rounded-full lg:flex items-center gap-2">
    <input type="text" className="grow" placeholder="Search" />
    <IoSearchOutline className="text-2xl"/>
    </label>
    <button className="text-3xl bg-[#0be58a] h-10 w-10 flex items-center justify-center font-medium rounded-full "><HiOutlineUserCircle /></button>
  </div>
</div>
    </div>
    );
};

export default Header;