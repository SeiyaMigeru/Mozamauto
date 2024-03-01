import { useEffect, useState, useContext } from "react";
import { allProducts } from "../functions/products";
import ProductCard from "../components/ProductCard";
import { FirenzaTire2 } from "../assets/images";
import InfoModal from "./InfoModal";
import GeneralModal from "./GeneralModal";
import { sendContactUsForm, sendOrderForm } from "../functions/sendMail";
import { ModalContext } from "../components/ModalProvider";
import { LanguageContext } from "../language/LanguageContext";
import { productSectionContent } from "../constants/productsContent";

const ProductSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [shownProducts, setShownProducts] = useState(allProducts);
    const [isInfoModalShown, setIsInfoModalShown] = useState(false);
    const [selectedTruck, setSelectedTruck] = useState(allProducts[0]);
    const {isModalVisible, status, openModal, closeModal, updateStatus} = useContext(ModalContext);
    const [searchTerm, setSearchTerm] = useState("");

    const { language } = useContext(LanguageContext);


    const searchProductByName = (products, searchName) => {
        searchName = searchName.toLowerCase();
        
        return products.filter(product => product.name.toLowerCase().includes(searchName));
    }

    const filterProducts = (_products, searchName, category) => {
        if (category === "all") {
            const products = searchProductByName(_products, searchTerm);
            return products;
        } else {
            return _products.filter((product) => 
            product.category === category &&
            product.name.toLowerCase().includes(searchName)
            );
      
        }
    }


    const onChange = (e) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        const products = filterProducts(allProducts, searchTerm, selectedCategory);
        setShownProducts(products);
    }, [searchTerm]);

    useEffect(() => {
        const products = filterProducts(allProducts, searchTerm, selectedCategory);
        setShownProducts(products);
    }, [selectedCategory]);


    const changeCategory = (category) => {
        setSelectedCategory(category);
    }

    const handleCardClick = (product_id) => {
        const product = shownProducts.find((_product) =>  _product.id === product_id);

        setSelectedTruck(product);

        setIsInfoModalShown(true);
        // 
    }

    

    const submitForm = async (formData) => {
        openModal();
    
        try {
          var result = await sendOrderForm(formData);    
          if (result.data.message === "success") {
            updateStatus("success");
          } else {
            updateStatus("failed");
          }
    
        } catch (error) {
          console.error("Form submission error:", error);
          updateStatus("failed");
        }
      };


    return (
        <div className="flex justify-center md:flex-row flex-col">
            <div className="flex flex-col items-center p-4 w-fit justify-start self-center mb-5 md:self-start">
                <h2 className="text-2xl font-palanquin font-bold mb-4">{productSectionContent[language].mozamProducts}</h2>
                <div class="my-6 py-2 px-3">
                    <div class="relative max-w-xs">
                        <label for="hs-table-search" class="sr-only">
                            Search
                        </label>
                        <input
                            onChange={onChange}
                            type="text"
                            name="hs-table-search"
                            id="hs-table-search"
                            class="py-2 ps-9 block border border-stone-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-90 disabled:pointer-events-none"
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
                    <li onClick={() => changeCategory("all")}
                        className={` min-w-[250px] m-2 px-3 py-1 border rounded-xl hover:bg-gray-200 font-montserrat shadow cursor-pointer ${selectedCategory === "all" ? "text-gray-700 bg-gray-300" : ""
                            }`}
                    >
                        {productSectionContent[language].all}
                    </li>
                    <li onClick={() => changeCategory("Shacman")}
                        className={`m-2 px-3 py-1 border rounded-xl hover:bg-gray-200 font-montserrat shadow cursor-pointer ${selectedCategory === "Shacman"
                            ? "text-gray-700 bg-gray-300"
                            : ""
                            }`}
                    >
                        {productSectionContent[language].shacman}
                    </li>
                    <li onClick={() => changeCategory("Lovol")}
                        className={`m-2 px-3 py-1 border rounded-xl hover:bg-gray-200 font-montserrat shadow cursor-pointer ${selectedCategory === "LOVOL Industrial Trucks"
                            ? "text-gray-700 bg-gray-300"
                            : ""
                            }`}
                    >
                        {productSectionContent[language].lovol}
                    </li>
                    <li onClick={() => changeCategory("CIMC")}
                        className={`m-2 px-3 py-1 border rounded-xl hover:bg-gray-200 font-montserrat shadow cursor-pointer ${selectedCategory === "CIMC"
                            ? "text-gray-700 bg-gray-300"
                            : ""
                            }`}
                    >
                        {productSectionContent[language].cimc}
                    </li>
                    <li onClick={() => changeCategory("Firenza")}
                        className={`m-2 px-3 py-1 border rounded-xl hover:bg-gray-200 font-montserrat shadow cursor-pointer ${selectedCategory === "Firenza"
                            ? "text-gray-700 bg-gray-300"
                            : ""
                            }`}
                    >
                        {productSectionContent[language].firenza}
                    </li>
                    <li onClick={() => changeCategory("Fuchs Oil")}
                        className={`m-2 px-3 py-1 border rounded-xl hover:bg-gray-200 font-montserrat shadow cursor-pointer ${selectedCategory === "Fuchs Oil"
                            ? "text-gray-700 bg-gray-300"
                            : ""
                            }`}
                    >
                        {productSectionContent[language].fuchsOil}
                    </li>
                    <li onClick={() => changeCategory("Batteries")}
                        className={`m-2 px-3 py-1 border rounded-xl hover:bg-gray-200 font-montserrat shadow cursor-pointer ${selectedCategory === "Batteries"
                            ? "text-gray-700 bg-gray-300"
                            : ""
                            }`}
                    >
                        {productSectionContent[language].batteries}
                    </li>
                    <li onClick={() => changeCategory("Parts & Accessories")}
                        className={`m-2 px-3 py-1 border rounded-xl hover:bg-gray-200 font-montserrat shadow cursor-pointer ${selectedCategory === "Parts & Accessories"
                            ? "text-gray-700 bg-gray-300"
                            : ""
                            }`}
                    >
                        {productSectionContent[language].parts}
                    </li>
                </ul>
            </div>
            <div className="ml-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {
                        shownProducts.length === 0 ?
                            (<div className="flex items-center justify-center bg-white p-4 h-full">
                                <p className="text-2xl font-bold font-palanquin">
                                {productSectionContent[language].noProductsAvailable}
                                </p>
                            </div>) : 

                            (
                                shownProducts.map(
                                (product) => ( 
                                    <ProductCard product={product} handleCardClick={handleCardClick}  />
                                )
                            )
                            )
                    }


                </div>

                {isInfoModalShown && < InfoModal
                    onClose={() => {setIsInfoModalShown(false)}}
                    product={selectedTruck}
                    submitForm={submitForm}
                />}

                <GeneralModal isVisible={isModalVisible} status={status} closeModal={closeModal} />
            </div>
        </div>
    )
}

export default ProductSection;