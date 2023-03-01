import React from "react";
import "./Sidebar.css";
import { ImUserTie } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { GrDocumentPdf, GrSettingsOption } from "react-icons/gr";
import { RiFolderSettingsFill } from "react-icons/ri";
import MenuItem from "./MenuItem";
import SubItem from "./SubItem";

// import { a } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="userNameCard">
        <ImUserTie size={25} />
        <div>Nikhil Sangwan</div>
      </div>
      <ul className="menu-list">
        <MenuItem
          title={"Notification"}
          icon={<IoIosNotifications className="iconsSidebar" size={25} />}
          active={true}
        />
        <SubItem
          icon={
            <AiFillHome className="iconsSidebar" fill="#609dfe" size={20} />
          }
          text={"Mirza international add a new document"}
         
        />
        <SubItem
          icon={
            <GrDocumentPdf
              style={{ color: "#609dfe" }}
              className="iconsSidebar"
              size={20}
            />
          }
          text={"Mirza international add a new document"}
        />
        <SubItem
          icon={
            <GrSettingsOption
              style={{ color: "#609dfe" }}
              className="iconsSidebar"
              size={20}
            />
          }
          text={"Mirza international add a new document"}
        />
        <MenuItem
          title={"Home"}
          icon={<AiFillHome className="iconsSidebar" fill="#525254" size={25} />}
          active={false}
        />
         <MenuItem
          title={"Production"}
          icon={<RiFolderSettingsFill className="iconsSidebar" size={25} />}
          active={true}
        />
         <SubItem
          icon={
            ""
          }
          text={"Dying"}
        />
          <SubItem
          icon={
            ""
          }
          text={"Fishing"}
        />
           <SubItem
          icon={
            ""
          }
          text={"Crusting"}
        />
        <SubItem
          icon={
            <GrSettingsOption
              style={{ color: "#609dfe" }}
              className="iconsSidebar"
              size={20}
            />
          }
          text={"Reports"}
        />
         <SubItem
          icon={
            <GrSettingsOption
              style={{ color: "#609dfe" }}
              className="iconsSidebar"
              size={20}
            />
          }
          text={"Planing"}
        />
         <SubItem
          icon={
            <GrSettingsOption
              style={{ color: "#609dfe" }}
              className="iconsSidebar"
              size={20}
            />
          }
          text={"Finances"}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
