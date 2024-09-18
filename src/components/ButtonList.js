import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const listName=["All","Gaming","Live","Cricket","News","Cooking","Valentine", "Politics", "Technology", "History" , "Bollywood", "Weather"]
  return (
    <div className="w-screen flex overflow-x-scroll space-x-4 no-scrollbar">
      {listName.map((name) => (
        <Button name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
