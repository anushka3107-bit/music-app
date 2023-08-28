import React from "react";
import {BiPlus} from "react-icons/bi";

const MenuPlaylist = () => {
  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>PlayList</p>
        <i><BiPlus /></i>
      </div>
      <div className="playListScroll">
        
      </div>
    </div>
  );
};

export default MenuPlaylist;
