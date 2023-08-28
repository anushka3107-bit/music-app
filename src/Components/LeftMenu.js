import React from "react";
import "../Styles/LeftMenu.css";
import { BsSpotify } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Menu from "./Menu";
import MenuList from "../Components/MenuList";
import MenuPlaylist from "./MenuPlaylist";

const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <BsSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <BsThreeDots />
        </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i className="searchIcon">
          <BsSearch />
        </i>
      </div>

      <Menu title={"Menu"} menuObject ={MenuList} />
      <MenuPlaylist />
    </div>
  );
};

export default LeftMenu;
