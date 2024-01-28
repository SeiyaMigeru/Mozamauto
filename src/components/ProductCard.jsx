import { FirenzaTire2 } from "../assets/images";

const ProductCard = ({product, handleCardClick}) => {
    return (
        <div
            className={`relative flex items-center flex-col justify-center bg-white rounded shadow-lg cursor-pointer hover:bg-gray-200 max-w-sm`}
            onClick={() => handleCardClick(product.id)}
        >
            <img className="" src={product.image === "" ? FirenzaTire2 : product.image} width={300} height={300} />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white text-2xl font-bold font-palanquin flex items-start pt-3 justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                {product.name}
            </div>
        </div>
    )
}

export default ProductCard;