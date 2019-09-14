import React, { Component } from "react";
import posed from "react-pose";
import "./App.css";

/*buat warna langit*/
const Sky = posed.div({
  day: { background: "#fffc9f" },
  night: { background: "#0789c7" }
});

/*night*/
const Khintil = posed.div({
  day: { opacity: 1, transition: { duration: 1000 } },
  night: {
    opacity: 0,
    transition: { duration: 2000 }
  }
});

/*day*/
const Khintil2 = posed.div({
  day: { opacity: 1, transition: { duration: 1000 } },
  night: {
    opacity: 0,
    transition: { duration: 2000 }
  }
});

/*draggable sun*/
const Sun = posed.div({
  draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.5 },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
  day: { y:0, opacity: 1, zIndex: 10 },
  night: { y:-400 ,opacity: 0, zIndex: 9 }
});

/*draggable moon*/
const Moon = posed.div({
  draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.2 },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 300 }
  },
  day: {  zIndex: 9, y:-400},
  night: {  zIndex: 10, y:0 }
});

/* toggle container */
const Box = posed.div({
  init: {
    scale: 1.1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  day: {
    background: "#000"
  } /* bisa masukin css tapi harus camelCase contohnya borderRadius: "25px"*/,
  night: { background: "#fff" }
});

/* buletan toggle nya */
const Circle = posed.div({
  draggable: "x",
  drag: { scale: 1.1 },
  dragEnd: { scale: 1 },
  dragBounds: { left: "0%", right: "110%" },
  day: { background: "#fff" },
  night: { background: "#000" }
});

/*buat draggable text nya */
const TxtContainer = posed.div({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.5
  },
  day: { color: "#464411" },
  night: { color: "#fff" }
});

class App extends Component {
  state = {
    isDay: true
  };
  handleScroll = (event) => {
    let scrollTop = event.target.scrollingElement.scrollTop;
    console.log(scrollTop);
  }
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll);
  }

  /* function buat saat di toggle*/
  jing = () => {
    this.setState({
      isDay: !this.state.isDay
    });

    let text = document.getElementById("text");
    this.state.isDay
      ? (text.innerHTML = "LightMode.")
      : (text.innerHTML = "DarkMode.");
  };

  render() {
    const { isDay } = this.state;
    return (
      <div className="App">
        <Sky className="sky" pose={isDay ? "day" : "night"} />
        <Sun className="sun" pose={isDay ? "day" : "night"} />
        <Moon className="moon" pose={isDay ? "day" : "night"} />
        <Circle
          className="circle"
          onDragEnd={this.jing}
          pose={isDay ? "day" : "night"}
        />
        <Box className="toggle" pose={isDay ? "day" : "night"} />
        <TxtContainer className="txtContainer" pose={isDay ? "day" : "night"}>
          <h1 id="text">Light Mode.</h1>
        </TxtContainer>
        <Khintil className="khintil" pose={isDay ? "night" : "day"} />
        <Khintil2 className="khintil2" pose={isDay ? "day" : "night"} />
      </div>
    );
  }
}

export default App;
