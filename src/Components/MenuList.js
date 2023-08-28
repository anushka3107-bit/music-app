import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BiPulse } from "react-icons/bi";
import { LuRadioTower } from "react-icons/lu";
import { BsMicFill } from "react-icons/bs";
import { BsJournalAlbum } from "react-icons/bs";
import { MdOutlinePodcasts } from "react-icons/md";

const MenuList = [
  {
    id: 1,
    icon: <GoHomeFill />,
    name: "Home",
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: "Discover",
  },
  {
    id: 3,
    icon: <LuRadioTower />,
    name: "Radio",
  },
  {
    id: 4,
    icon: <BsMicFill />,
    name: "Artist",
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Albums",
  },
  {
    id: 6,
    icon: <MdOutlinePodcasts />,
    name: "Podcast",
  },
];

export default MenuList;
