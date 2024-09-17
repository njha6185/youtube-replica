import { useDispatch } from "react-redux";
import { HEMBURGER_MENU_ICON_URL, LOGO, USER_ICON } from "../constant";
import { toggleMenu } from "../store/appConfigSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-1 md:p-5 md:m-2 shadow">
      <div className="flex col-span-4 md:col-span-1 pt-2 md:mx-2">
        <img
          className="h-8 cursor-pointer"
          src={HEMBURGER_MENU_ICON_URL}
          alt="menu"
          onClick={handleMenuToggle}
        />
        <a href="/">
          <img className="h-8 ml-1 mr-2 md:mx-2" src={LOGO} alt="logo" />
        </a>
      </div>
      <div className="col-span-6 md:col-span-10 ml-1 text-center">
        <input
          className="w-[65%] md:w-[75%] p-2 border-2 widt border-gray-500 rounded-l-full text-center"
          type="text"
          placeholder="Search"
        />
        <button className="border-2 border-gray-500 bg-gray-100  p-2 px-3 text-center rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-2 md:col-span-1 pt-1">
        <img className="h-8" alt="user icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
