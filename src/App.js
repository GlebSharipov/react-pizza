import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { Header } from "./components";
import { Cart, Home } from "./pages";
import { setPizzas as setPizzasAction } from "./redux/actions/pizzas";

// function App() {
//   useEffect(() => {
//     axios.get("http://localhost:3000/db.json").then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home pizzas={pizzas} />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home pizzas={this.props.items} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filtres: state.filtres,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};

// const mapDispatchToProps = {
//   setPizzas,
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
