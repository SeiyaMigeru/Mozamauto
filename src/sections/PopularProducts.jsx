import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';

const PopularProducts = () => {
  return (
    <section className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>OUR <span className='text-stone-500'>EXPENDABLE</span> TRUCKS</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Explore the pinnacle of power and performance with our curated selection of top-tier trucks. </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
        sm:gap-4 gap-14'>
          {products.map((product) => (
            <PopularProductCard key= {product.name} {...product} />
          ))}
      </div>
    </section>
  )
}

export default PopularProducts