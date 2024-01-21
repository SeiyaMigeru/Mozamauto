import { truck1, truck2, truck3, product1, product2,
    product3, product4, customer1, customer2 } from '../assets/images'
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
    {bigTruck: truck1, thumbnail: truck1},
    {bigTruck: truck2, thumbnail: truck2},
    {bigTruck: truck3, thumbnail: truck3},
];

export const products = [
    {imgURL:product1, name:"Sinotruk Howo TX Serie 6x4"},
    {imgURL:product2, name:"Compression Garbage Truck"},
    {imgURL:product3, name:"Stake Cargo Semi Trailer"},
    {imgURL:product4, name:"Sinotruk Howo TX Series 6x4"},
];



export const reviews = [
    {imgURL: customer1, customerName:"Jonathan Davis", rating:4.5,feedback:"Absolutely thrilled with my purchase! The quality exceeded my expectations, and the customer service from start to finish was impeccable."},
    {imgURL: customer2, customerName:"Marcus Turner", rating:4.5,feedback:"Kudos to the team at MozamAuto! The product not only met but surpassed my requirements, and the swift and helpful assistance I received from customer support made the entire experience truly exceptional."},
];

export const socialmedia = [
    {src: facebook, alt:'facebook logo'},
    {src: instagram, alt:'instagramlogo'},
    {src: twitter, alt:'twitter logo'},
];