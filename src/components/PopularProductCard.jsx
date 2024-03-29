import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name}) => {
  return (
    <div className="flex flex-1 flex-col w-full sm:w-full items-center xs:item-start">
        <img
            src={imgURL} alt={name}
            className=" rounded-2xl w-[280px] h-[280px]"
        />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className=' font-montserrat text-xl leading-normal text-slate-gray'>4.5</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
    </div>

  )
}

export default PopularProductCard