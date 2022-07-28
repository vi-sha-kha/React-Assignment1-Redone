
import "./App.css";
import React, { Component } from "react";
import CityList from "./components/mapFunction";
// import DisplayItems from "./components/displayItems";
import "./components/displayItems.css";
// import cities from "./components/mapFunction";
// import City from "./components/City";
// import Card from "react-bootstrap/Card";

class App extends Component {
  render() {
    return (
      // <div style={{ display: "flex", flexDirection: "row" }}>
      <div class="grid sm:grid-cols-3 gap-6">
       {/* <div> */}
        {/* <Card style={{ border: "2px solid #00adb5" }}> */}
       {/* <div className="App"> */}
          
        <CityList />
          {/* <DisplayItems /> */}
        
       {/* </Card> */}
      </div>
    );
  }
}

export default App;


