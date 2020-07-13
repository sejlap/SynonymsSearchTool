import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Components/Home";
import AddSynonym from "../Components/AddSynonym";
import Header from '../Components/Header'; 


class App extends Component {
  render() {
    return (
    <BrowserRouter>
         <Header/>
          <div>
            <Route path="/" exact component={Home}/>
            <Route path="/addsynonym" exact component={AddSynonym}/>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;