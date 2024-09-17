import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className=" h-screen p-5 shadow-lg w-40 md:w-48">
      <h1 className="font-bold">Home</h1>
      <ul className="pl-1">
        <li>Shorts</li>
        <li>Sports</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subscription</h1>
      <ul className="pl-1">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold">Explore</h1>
      <ul className="pl-1">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default SideBar;
