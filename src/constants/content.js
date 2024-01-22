import { facebook, fastTruck, passion, support, instagram, twitter } from '../assets/icons'

const heroContent = {
    en: {
        tagline: 'Driven To <br /> Perfection',
        shopLink: 'Shop now',
        additionalText: `Discover the road ahead with <b>Mozamauto</b>. Our collection
        of powerful trucks is your ticket to unmatched performance,
        combining toughness and innovation`
    },

    es: {
        tagline: 'Impulsado a <br /> Perfección',
        shopLink: 'Compra ahora',
        additionalText: `Spanish Discover the road ahead with <b>Mozamauto</b>. Our collection
        of powerful trucks is your ticket to unmatched performance,
        combining toughness and innovation`
    }
}

const popularProductContent = {
    en: {
        header: `OUR <span class='text-stone-500'>EXPENDABLE</span> TRUCKS`,
        caption: `Explore the pinnacle of power and performance with our curated selection of top-tier trucks.`,
    },
    es: {
        header: `OUR <span class='text-stone-500'>EXPENDABLE</span> TRUCKS`,
        caption: `Explore the pinnacle of power and performance with our curated selection of top-tier trucks.`
    }
}


const superQualityContent = {
    en: {
        header: `<span>Try the</span>
        <br />
        <span class="text-stone-500 inline-block mt-3">Excellence of our</span> Truck Parts`,
        caption: `Elevate your adventure with confidence, knowing that your vehicle is outfitted with the best-in-class equipment available. 
        Explore our best-selling items. Be <span class="text-lg font-palanquin font-bold">DRIVEN TO PERFECTION.</span>`,
        shopLink: 'Shop now',
    },
    es: {
        header: `<span>Try the</span>
        <br />
        <span class="text-stone-500 inline-block mt-3">Excellence of our</span> Truck Parts`,
        caption: `Elevate your adventure with confidence, knowing that your vehicle is outfitted with the best-in-class equipment available. 
        Explore our best-selling items. Be <span class="text-lg font-palanquin font-bold">DRIVEN TO PERFECTION.</span>`,
        shopLink: 'Shop now',
    }
}

const services = {
    en: [
        {imgURL: fastTruck, label:"Outstanding Service", subtext:"We are made up of experienced professionals that are equipped with excellent workmanship to do excellent work in enabling you to get back on your journey."},
        {imgURL: passion, label:"High-Quality Parts", subtext:"We take pride in offering a wide variety of premium products, each of which is a testament to quality and endurance."},
        {imgURL: support, label:"Passionate Teams", subtext:"Our dedicated team of passionate specialists works relentlessly to bring you the best selection, driven by a shared dedication to quality."},
    ],
    es:[
        {imgURL: fastTruck, label:"Spanish Outstanding Service", subtext:"We are made up of experienced professionals that are equipped with excellent workmanship to do excellent work in enabling you to get back on your journey."},
        {imgURL: passion, label:"High-Quality Parts", subtext:"We take pride in offering a wide variety of premium products, each of which is a testament to quality and endurance."},
        {imgURL: support, label:"Passionate Teams", subtext:"Our dedicated team of passionate specialists works relentlessly to bring you the best selection, driven by a shared dedication to quality."},
    ]
}

export {heroContent, popularProductContent, superQualityContent, services}