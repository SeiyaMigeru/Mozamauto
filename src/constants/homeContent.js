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
        tagline: 'Guiado pela <br />  Perfeição',
        shopLink: 'Compre Agora',
        additionalText: `
        Descubra o caminho à frente com a <b> Mozamauto </b>. Nossa coleção de caminhões potentes 
        é o seu bilhete para um desempenho incomparável, combinando robustez e inovação.`
    }
}

const popularProductContent = {
    en: {
        header: `OUR <span class='text-stone-500'>EXPENDABLE</span> TRUCKS`,
        caption: `Explore the pinnacle of power and performance with our curated selection of top-tier trucks.`,
    },
    es: {
        header: `Nosso  Caminhão <span class='text-stone-500'>Expansível</span>`,
        caption: `Explore o ápice de potência e desempenho com nossa seleção cuidadosamente escolhida de caminhões de primeira linha.`
    }
}


const superQualityContent = {
    en: {
        header: `<span>Try the</span>
        <span class="text-white-400 inline-block mt-3">Excellence of our</span> Service Team`,
        caption: `Elevate your adventure with confidence, knowing that your vehicle is outfitted with the best-selling equipment available 
        and top class service. Be <span class=" text-white-400 text-lg font-palanquin font-bold">DRIVEN TO PERFECTION.</span>`,
        shopLink: 'Book An Appointment Now',
    },
    es: {
        header: `<span class="text-white-400 inline-block mt-3">Experimente a excelência</span> das peças do nosso caminhão`,
        caption: `
        Eleve a sua aventura com confiança, sabendo que o seu veículo está equipado com os equipamentos mais vendidos disponíveis. e serviço de primeira classe. <span class=" text-white-400 text-lg font-palanquin font-bold">Seja impulsionado para a perfeição.</span>`,
        shopLink: 'Reserva una cita ahora',
    }
}

const eventsHome = {
    en: {
        header: `Uniting Professionals, Driving Excellence`,
        caption: `Stay updated on the latest industry trends, innovations, and regulations by attending our diverse range of events.</span>`,
        shopLink: 'Check The Latest Events',
    },
    es: {
        header: `<span class="text-white-400 inline-block mt-3">Experimente a excelência</span> das peças do nosso caminhão`,
        caption: `
        Eleve a sua aventura com confiança, sabendo que o seu veículo está equipado com os equipamentos mais vendidos disponíveis. e serviço de primeira classe. <span class=" text-white-400 text-lg font-palanquin font-bold">Seja impulsionado para a perfeição.</span>`,
        shopLink: 'Reserva una cita ahora',
    }
}

const services = {
    en: [
        {imgURL: fastTruck, label:"Outstanding Service", subtext:"We are made up of experienced professionals that are equipped with excellent workmanship to do excellent work in enabling you to get back on your journey."},
        {imgURL: passion, label:"High-Quality Parts", subtext:"We take pride in offering a wide variety of premium products, each of which is a testament to quality and endurance."},
        {imgURL: support, label:"Passionate Teams", subtext:"Our dedicated team of passionate specialists works relentlessly to bring you the best selection, driven by a shared dedication to quality."},
    ],
    es:[
        {imgURL: fastTruck, label:"Serviço Excepcional", subtext:"Somos compostos por profissionais experientes equipados com excelente habilidade para realizar um trabalho excepcional, permitindo que você retome sua jornada."},
        {imgURL: passion, label:"Peças de Alta Qualidade", subtext:"Orgulhamo-nos de oferecer uma ampla variedade de produtos premium, cada um dos quais é um testemunho de qualidade e durabilidade."},
        {imgURL: support, label:"Equipes Apaixonadas", subtext:"Nossa equipe dedicada de especialistas apaixonados trabalha incansavelmente para trazer a você a melhor seleção, impulsionada por um compromisso compartilhado com a qualidade."},
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
        share: `Compartilhe suas ideias conosco. <span class="text-stone-500">É assim que melhoramos.</span>`,
        emailUs: 'Envie-nos um e-mail.'
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
        footerTagline: `
        ESCOLHA MOZAM AUTO.<br />
        Escolha Ser <b>IMPULSIONADO PARA A PERFEIÇÃO</b>`,
        copyright: `Copyright. All Rights Reserved`,
        termsAndCondi: `Termos e Condições`
    }
}

export {heroContent, popularProductContent, superQualityContent, services, comments, subscribeContent, footerContent, eventsHome}