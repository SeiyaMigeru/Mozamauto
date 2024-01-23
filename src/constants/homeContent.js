import { fastTruck, passion, support} from '../assets/icons'
import { customer1, customer2 } from '../assets/images'

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

const comments = {
    en: [
        {imgURL: customer1, customerName:"Jonathan Davis", rating:4.5,feedback:"Absolutely thrilled with my purchase! The quality exceeded my expectations, and the customer service from start to finish was impeccable."},
        {imgURL: customer2, customerName:"Marcus Turner", rating:4.5,feedback:"Kudos to the team at MozamAuto! The product not only met but surpassed my requirements, and the swift and helpful assistance I received from customer support made the entire experience truly exceptional."},
    ],
    es: [
        {imgURL: customer1, customerName:"Jonathan Davis", rating:4.5,feedback:"Absolutely thrilled with my purchase! The quality exceeded my expectations, and the customer service from start to finish was impeccable."},
        {imgURL: customer2, customerName:"Marcus Turner", rating:4.5,feedback:"Kudos to the team at MozamAuto! The product not only met but surpassed my requirements, and the swift and helpful assistance I received from customer support made the entire experience truly exceptional."},
    ]
}


const subscribeContent = {
    en: {
        share: `Share your ideas with us. <span class="text-stone-500">That is how we improve.</span>`,
        emailUs: 'Email Us'
    },
    es: {
        share: `Share your ideas with us. <span class="text-stone-500">That is how we improve.</span>`,
        emailUs: 'Email Us'
    }
}

const footerContent = {
    en: {
        footerTagline: `CHOOSE MOZAM AUTO. <br />
        CHOOSE TO BE <b>DRIVEN TO PERFECTION</b>`,
        copyright: `Copyright. All Rights Reserved`,
        termsAndCondi: `Terms & Conditions`
    },
    es: {
        footerTagline: `CHOOSE MOZAM AUTO. <br />
        CHOOSE TO BE <b>DRIVEN TO PERFECTION</b>`,
        copyright: `Copyright. All Rights Reserved`,
        termsAndCondi: `Terms & Conditions`
    }
}

export {heroContent, popularProductContent, superQualityContent, services, comments, subscribeContent, footerContent}