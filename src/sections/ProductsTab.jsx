import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { FirenzaTire1, FirenzaTire2 } from "../assets/images";

class ProductsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      truckData: [
        // Your truck data here, each truck should have a category attribute
        { id: 1, name: "Truck 1", category: "Category A", },
        { id: 2, name: "Truck 2", category: "Category B", },
        { id: 3, name: "Firenza Tire 1", category: "Category D", img: FirenzaTire1 },
        { id: 4, name: "Firenza Tire 1", category: "Category D", img: FirenzaTire2 },
        // Add more trucks with categories
      ],
    };
  }

  handleCategoryClick = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleCardClick = (truckId) => {
    this.setState((prevState) => ({
      truckData: prevState.truckData.map((truck) => ({
        ...truck,
      })),
    }));
  };

  isCategoryEmpty = (category) => {
    const { truckData } = this.state;
    return (
      category !== null &&
      !truckData.some((truck) => truck.category === category)
    );
  };

  render() {
    const { selectedCategory, truckData } = this.state;

    // Filter the trucks based on the selected category
    const filteredTrucks =
      selectedCategory === null
        ? truckData
        : truckData.filter((truck) => truck.category === selectedCategory);

    return (
      <div className="flex">
        <div className="w-1/4 p-4">
          <h2 className="text-lg font-bold mb-4">Mozam Products</h2>
          <ul>
            <li
              onClick={() => this.handleCategoryClick(null)}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === null ? "text-stone-700 bg-stone-300" : ""
              }`}
            >
              All
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category A")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category A" ? "text-stone-700 bg-stone-300" : ""
              }`}
            >
              Shacman
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category B")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category B" ? "text-stone-700 bg-stone-300" : ""
              }`}
            >
              Lovol
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category C")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category C" ? "text-stone-700 bg-stone-300" : ""
              }`}
            >
              CMC
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category D")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category D" ? "text-stone-700 bg-stone-300" : ""
              }`}
            >
              Firenza
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category E")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category E" ? "text-stone-700 bg-stone-300" : ""
              }`}
            >
              Fuchs Oil
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category F")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category F" ? "text-stone-700 bg-stone-300" : ""
              }`}
            >
              Willard Batteries
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category G")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category G" ? "text-stone-700 bg-stone-300" : ""
              }`}
            >
              Parts & Accessories
            </li>
          </ul>
        </div>
        <div className="w-3/4 p-4">
          <div className="grid xl:grid-cols-3 grid-cols-2 gap-8">
            {filteredTrucks.length === 0 ? (
              this.isCategoryEmpty(selectedCategory) ? (
                <div className="flex items-center justify-center bg-white p-4 h-full">
                  <p className="text-2xl font-bold font-palanquin">No Products Available</p>
                </div>
              ) : null
            ) : (
              filteredTrucks.map((truck) => (
                  <div
                    className={`flex items-center flex-col justify-center bg-white rounded shadow-lg p-4 cursor-pointer hover:bg-stone-200 max-w-sm`}
                    onClick={() => this.handleCardClick(truck.id)}
                  >
                    <img className=""src={truck.img} width={300} height={300}/>
                    <h3 className=" text-xl font-montserrat m-3 font-semibold">{truck.name}</h3>
                  </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsTab;
