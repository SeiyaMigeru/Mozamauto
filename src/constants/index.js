import { truck1, truck2, truck3, product1, product2,
    product3, product4, customer1, customer2, Firenza1, Lovol1, Lovol3, Lovol4, Shacman2, Shacman3, Shacman4, LovolCert, FirenzaCert, ShacmanCert } from '../assets/images'
import { facebook, fastTruck, passion, support, instagram, twitter } from '../assets/icons'

export const navLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/partners", label: "Partners" },
    { href: "/mozamnews", label: "MozNews" },
    { href: "/contact-us", label: "Contact Us" },
    
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const trucks = [
    {bigTruck: ShacmanCert, thumbnail: ShacmanCert},
    {bigTruck: LovolCert, thumbnail: LovolCert},
    {bigTruck: FirenzaCert, thumbnail: FirenzaCert},
];

export const products = [
    {imgURL:Shacman4, name:"SHACMAN X3000 430"},
    {imgURL:Shacman3, name:"SHACMAN F3000"},
    {imgURL:Lovol3, name:"LOVOL D904"},
    {imgURL:Lovol4, name:"LOVOL GK120"},
];



export const reviews = [
    {imgURL: customer1, customerName:"Jonathan Davis", rating:4.5,feedback:"Absolutely thrilled with my purchase! The quality exceeded my expectations, and the customer service from start to finish was impeccable."},
    {imgURL: customer2, customerName:"Marcus Turner", rating:4.5,feedback:"Kudos to the team at MozamAuto! The product not only met but surpassed my requirements, and the swift and helpful assistance I received from customer support made the entire experience truly exceptional."},
];

export const socialmedia = [
    {src: facebook, alt:'facebook logo', href:'https://www.facebook.com/mozamauto/'},
    {src: instagram, alt:'instagramlogo', href:'https://www.instagram.com/mozam_autolda/'},
    {src: twitter, alt:'twitter logo', href:''},
];