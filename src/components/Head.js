import { useDispatch } from "react-redux";
import { HEMBURGER_MENU_ICON_URL, LOGO, USER_ICON, YOUTUBE_SEARCH_SUGGESTION_URL } from "../constant";
import { setSeachData, toggleMenu } from "../store/appConfigSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=>{
    const timer = setTimeout(()=>{getSearchSuggestion()},200)
    return ()=>clearTimeout(timer)
  },[searchQuery])

  const getSearchSuggestion=async ()=>{
    //provide search query here to get search suggestion
    // const data=await fetch(YOUTUBE_SEARCH_SUGGESTION_URL+searchQuery,)

    // const json = await data.json();
    const data = searchQuery
    // console.log(data);

  }


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
        <div>
        <input
          className="w-[65%] md:w-[75%] p-2 border-2 widt border-gray-500 rounded-l-full text-center"
          type="text"
          placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}  
          value={searchQuery}/>
        <button className="border-2 border-gray-500 bg-gray-100  p-2 px-3 text-center rounded-r-full"
        onClick={()=>{
          dispatch(setSeachData(searchQuery))
        }}
        >
          🔍
        </button>
        </div>
        {searchQuery && false && (<div className="absolute w-1/2 py-2 m-5 bg-white text-left pl-7 md:pl-10 rounded-lg">
          <ul className="text-lg">
            <li>🔍spider</li>
            <li>🔍spiderman</li>
            <li>🔍test spider</li>
            <li>🔍spider man 2</li>
            <li>🔍spider</li>
            <li>🔍man</li>
            <li>🔍spider man test</li>
            <li>🔍spider man 2</li>    
          </ul>
        </div>)}
      </div>
      <div className="col-span-2 md:col-span-1 pt-1">
        <img className="h-8" alt="user icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
