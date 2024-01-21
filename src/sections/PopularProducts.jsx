import { useContext } from 'react';
import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';
import { popularProductContent } from '../constants/content';
import { LanguageContext } from '../language/LanguageContext';

const PopularProducts = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold' dangerouslySetInnerHTML={{__html: popularProductContent[language].header}} />
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray' dangerouslySetInnerHTML={{__html: popularProductContent[language].caption}} />
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