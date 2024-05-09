import React from "react";
import '../App.css';

const TabNavItem = ({ id, title, activeTab, setActiveTab,show1,setShow1 }) => {

    const handleClick = () => {
        setActiveTab(id);
        if(show1){
        setShow1(false)}
    };
    return ( < div className = "tab-nav" >
        <
        h6 onClick = { handleClick }
        className = { activeTab === id ? "active bolder" : "" } > { title } <
        /h6> < /
        div >
    );
};
export default TabNavItem;