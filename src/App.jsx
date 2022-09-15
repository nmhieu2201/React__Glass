import React, { Component } from "react";
import GlassList from "./Components/Content/GlassList";
import Header from "./Components/Header/Header";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlassList />
      </div>
    );
  }
}
