// import logo from "./logo.svg";
// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const [show, setShow] = useState(false);
//   const [text, setText] = useState("");
//   useEffect(() => {
//     console.log("component did mount");
//   }, []);

//   useEffect(() => {
//     console.log("component did update");
//   });

//   useEffect(() => {
//     console.log("componentDidUpdate on dependancy change");
//     return () => {
//       console.log("componentWillUnmount on dependancy change");
//       if (count % 2 === 0) {
//         setText("even");
//       } else if (count % 2 !== 0) {
//         setText("odd");
//       }
//     };
//   }, [count]);

//   componentDidMount() {
//     console.log("componentDidMount")
//   }

//   const addToCount = () => {
//     setCount(count + 1);
//     console.log("addToCount clicked");
//     showHeader();
//   };

//   const showHeader = () => {
//     if (count % 2 === 0) {
//       setShow(true);
//     } else if (count % 2 !== 2) {
//       setShow(false);
//     }
//   };

//   return (
//     <div className="App">
//       {show && <Header />}
//       <p>{count}</p>
//       <button onClick={addToCount}>+</button>
//       <p>{text}</p>
//     </div>
//   );
// }

// const Header = () => {
//   useEffect(() => {
//     console.log("componentDidMount");
//     return () => {
//       console.log("componentDidUnmount");
//     };
//   }, []);
//   return <h1>Header</h1>;
// };

// export default App;

import React from "react";
import VisibleComp from "./VisibleComp";
class App extends React.Component {
  constructor(props) {
    super(props);

    // Initializing the state
    this.showComponent = this.showComponent.bind(this);
    this.state = { isVisible: false };
  }
  componentDidMount() {
    // Changing the state after 2 sec
    // from the time when the component
    // is rendered
    console.log("app componentDidMount");
  }

  componentDidUpdate() {
    console.log("app componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("App componentWillUnmount");
  }

  showComponent = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    if (this.state.isVisible === true) {
      return (
        <div>
          <h1>Class Components</h1>
          <VisibleComp />
          <button onClick={this.showComponent}>Click</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Class Components</h1>
          <h1>Not Visible</h1>
          <button onClick={this.showComponent}>Click</button>
        </div>
      );
    }
  }
}

export default App;

class InsideVisible extends React.Component {
  render() {
    return <h1>InsideVisible</h1>;
  }
}
