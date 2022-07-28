import React from "react";
// import CityList from "./mapFunction";
// import cities from "./mapFunction";
import './displayItems.css';
const DisplayItems =({name,date,image}) => {
    return(
    <div className="Outer__Container">
      <div className="Items__Container">
        {/* <div className="image"> */}
            <img src={image} alt="img not found" className="image"/>
            {/* </div> */}
        <div className="name">{name}</div>
        <div className="date">{date}</div>
      </div>
    </div>
    )
}
export default DisplayItems;