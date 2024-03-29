const TruckCard = ({ imgURL, changeTruckImage, bigTruckImage }) => {

    const handleClick = () => {
        if (bigTruckImage !== imgURL.bigTruck) {
            changeTruckImage(imgURL.bigTruck)
        }
    }

  return (
    <div
      className={`border-2 rounded-xl
    ${
      bigTruckImage === imgURL.bigTruck ? " border-gray-950" : "border-transparent"
    } cursor-pointer max-sm:flex-1`} onClick={handleClick}
    >
        <div className="flex justify-center items-center  bg-center
          sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img
                src={imgURL.thumbnail}
                alt="Truck Collection"
                width={127}
                height={103.34}
                className="object-contain shadow-xl rounded"
            />
        </div>

    </div>
  );
};

export default TruckCard;
