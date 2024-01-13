import React, { Component } from "react";
import { FirenzaTire1, FirenzaTire2 } from "../assets/images";
import { InfoModal } from "../sections";

class ProductsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      truckData: [
        // Your truck data here, each truck should have a category attribute
        { id: 1, name: "Truck 1", category: "Category A" },
        { id: 2, name: "Truck 2", category: "Category B" },
        {
          id: 3,
          name: "Firenza Tire 1",
          category: "Category D",
          img: FirenzaTire1,
        },
        {
          id: 4,
          name: "Firenza Tire 2",
          category: "Category D",
          img: FirenzaTire2,
        },
        {
          id: 5,
          name: "Firenza Tire 2",
          category: "Category D",
          img: FirenzaTire2,
        },
      ],
      isModalOpen: false,
      selectedTruck: null,
    };
  }

  handleCategoryClick = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleCardClick = (truckId) => {
    const selectedTruck = this.state.truckData.find(
      (truck) => truck.id === truckId
    );

    this.setState({
      selectedTruck,
      isModalOpen: true,
    });
  };

  isCategoryEmpty = (category) => {
    const { truckData } = this.state;
    return (
      category !== null &&
      !truckData.some((truck) => truck.category === category)
    );
  };

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
      selectedTruck: null,
    });
  };

  render() {
    const { selectedCategory, truckData, isModalOpen, selectedTruck } =
      this.state;

    // Filter the trucks based on the selected category
    const filteredTrucks =
      selectedCategory === null
        ? truckData
        : truckData.filter((truck) => truck.category === selectedCategory);

    return (
      <div className="flex">
        <div className="w-1/4 p-4">
          <h2 className="text-2xl font-palanquin font-bold mb-4">Mozam Products</h2>
          <div class="my-6 py-2 px-3">
            <div class="relative max-w-xs">
              <label for="hs-table-search" class="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                class="py-2 ps-9 block w-3/4 border border-stone-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-90 disabled:pointer-events-none"
                placeholder="Search for items"
              />
              <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                <svg
                  class="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
          </div>

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
                selectedCategory === "Category A"
                  ? "text-stone-700 bg-stone-300"
                  : ""
              }`}
            >
              Shacman
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category B")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category B"
                  ? "text-stone-700 bg-stone-300"
                  : ""
              }`}
            >
              Lovol
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category C")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category C"
                  ? "text-stone-700 bg-stone-300"
                  : ""
              }`}
            >
              CIMC
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category D")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category D"
                  ? "text-stone-700 bg-stone-300"
                  : ""
              }`}
            >
              Firenza
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category E")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category E"
                  ? "text-stone-700 bg-stone-300"
                  : ""
              }`}
            >
              Fuchs Oil
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category F")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category F"
                  ? "text-stone-700 bg-stone-300"
                  : ""
              }`}
            >
              Batteries
            </li>
            <li
              onClick={() => this.handleCategoryClick("Category G")}
              className={`m-2 w-1/2 pl-3 border rounded-xl hover:bg-stone-200 font-montserrat shadow cursor-pointer ${
                selectedCategory === "Category G"
                  ? "text-stone-700 bg-stone-300"
                  : ""
              }`}
            >
              Parts & Accessories
            </li>
          </ul>
        </div>
        <div className=" md:mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {filteredTrucks.length === 0 ? (
              this.isCategoryEmpty(selectedCategory) ? (
                <div className="flex items-center justify-center bg-white p-4 h-full">
                  <p className="text-2xl font-bold font-palanquin">
                    No Products Available
                  </p>
                </div>
              ) : null
            ) : (
              filteredTrucks.map((truck) => (
                <div
                  className={`relative flex items-center flex-col justify-center bg-white rounded shadow-lg cursor-pointer hover:bg-stone-200 max-w-sm`}
                  onClick={() => this.handleCardClick(truck.id)}
                >
                  <img className="" src={truck.img} width={300} height={300} />
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white text-2xl font-bold font-palanquin flex items-start pt-3 justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {truck.name}
                  </div>
                </div>
              ))
            )}
          </div>
          <InfoModal
            isOpen={this.state.isModalOpen}
            onClose={() => this.setState({ isModalOpen: false })}
            truck={this.state.selectedTruck}
          />
        </div>
      </div>
    );
  }
}

export default ProductsTab;
