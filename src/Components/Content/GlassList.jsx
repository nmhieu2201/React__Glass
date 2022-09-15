import React, { Component } from "react";
const listGlass = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class Content extends Component {
  state = {
    url: "",
    name: "",
    desc: "",
  };
  renderGlassList = () => {
    return listGlass.map((item, index) => {
      return (
        <div className="col-3 d-inline-block" key={index}>
          <img
            onClick={() => this.renderInfo(item)}
            style={{ cursor: "pointer" }}
            src={item.url}
            alt=""
            width={200}
          />
        </div>
      );
    });
  };
  renderInfo = (item) => {
    this.setState({
      url: item.url,
      name: item.name,
      desc: item.desc,
    });
  };
  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="test">
            <div className="img">
              <img
                src="./img/glassesImage/model.jpg"
                className="w-100"
                alt=""
              />
              <img className="glass" src={this.state.url} alt="" />
            </div>
            <div className="info">
              <h2 className="name">{this.state.name}</h2>
              <p className="des">{this.state.desc}</p>
            </div>
            ;
          </div>
          <div className="list-glass mt-2">
            <div className="bg-light row">{this.renderGlassList()}</div>
          </div>
        </div>
      </div>
    );
  }
}
