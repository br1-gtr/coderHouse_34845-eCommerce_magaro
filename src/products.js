/*import img0A from './assets/img/0a.jpg';
import img0B from './assets/img/0b.jpg';
import img1A from './assets/img/1a.jpg';
import img1B from './assets/img/1b.jpg';
import img2A from './assets/img/2a.jpg';
import img2B from './assets/img/2b.jpg';
import img3A from './assets/img/3a.jpg';
import img3B from './assets/img/3b.jpg';
import img4A from './assets/img/4a.jpg';
import img4B from './assets/img/4b.jpg';
import img5A from './assets/img/5a.jpg';
import img5B from './assets/img/5b.jpg';
import img6A from './assets/img/6a.png';
import img6B from './assets/img/6b.jpg';

https://i.ibb.co/Kwgfxy6/0a.jpg
https://i.ibb.co/zFg1rnR/0b.jpg
https://i.ibb.co/SXy7T8v/1a.jpg
https://i.ibb.co/5jwVf0q/1b.jpg
https://i.ibb.co/6bgsS3X/2a.jpg
https://i.ibb.co/jZ41Qhc/2b.jpg
https://i.ibb.co/cQGnC8Q/3a.jpg
https://i.ibb.co/J5GZ82f/3b.jpg
https://i.ibb.co/mhsXw6v/4a.jpg
https://i.ibb.co/FqCbWPn/4b.jpg
https://i.ibb.co/GWmKB80/5a.jpg
https://i.ibb.co/VY2kM7c/5b.jpg
https://i.ibb.co/qk8v2dF/6a.png
https://i.ibb.co/Bwt6BDX/6b.jpg
*/


export const products = [
    {   
        id: 0,
        name: 'Notebook Asus TUF',
        description: {
            maker: 'Asus',
            processor: 'i5',
            ram: '16',
            memory: '512',
            gi: 'RTX 3050',
            so: 'W11'
        },
        price: 425000,
        off: 15,
        stock: true,
        imgA: 'https://i.ibb.co/Kwgfxy6/0a.jpg',
        imgB: 'https://i.ibb.co/zFg1rnR/0b.jpg'
    },
    {   
        id: 1,
        name: 'Notebook Acer Nitro 5',
        description: {
            maker: 'Acer',
            processor: 'i5',
            ram: '8',
            memory: '512',
            gi: 'RTX 3050',
            so: 'W10'
        },
        price: 258000,
        off: 10,
        stock: false,
        imgA: 'https://i.ibb.co/SXy7T8v/1a.jpg',
        imgB: 'https://i.ibb.co/5jwVf0q/1b.jpg'
    },
    {   
        id: 2,
        name: 'Notebook Asus ZenBook Duo',
        description: {
            maker: 'Asus',
            processor: 'i7',
            ram: '32',
            memory: '512',
            gi: 'MX450',
            so: 'W11'
        },
        price: 458800,
        off: 10,
        stock: true,
        imgA: 'https://i.ibb.co/6bgsS3X/2a.jpg',
        imgB: 'https://i.ibb.co/jZ41Qhc/2b.jpg'
    },
    {   
        id: 3,
        name: 'Notebook Asus Vivobook Pro 15',
        description: {
            maker: 'Asus',
            processor: 'R9',
            ram: '16',
            memory: '512',
            gi: 'RTX 3050',
            so: 'W11'
        },
        price: 481000,
        off: 20,
        stock: false,
        imgA: 'https://i.ibb.co/cQGnC8Q/3a.jpg',
        imgB: 'https://i.ibb.co/cQGnC8Q/3b.jpg'
    },
    {   
        id: 4,
        name: 'Notebook Asus X515',
        description: {
            maker: 'Asus',
            processor: 'i3',
            ram: '4',
            memory: '256',
            gi: 'Onboard GI',
            so: 'W10'
        },
        price: 127000,
        off: 5,
        stock: true,
        imgA: 'https://i.ibb.co/mhsXw6v/4a.jpg',
        imgB: 'https://i.ibb.co/FqCbWPn/4b.jpg'
    },
    {   
        id: 5,
        name: 'Notebook Lenovo Gaming',
        description: {
            maker: 'Lenovo',
            processor: 'R5',
            ram: '8',
            memory: '256',
            gi: 'GTX 1650ti',
            so: 'W10'
        },
        price: 267800,
        off: 10,
        stock: true,
        imgA: 'https://i.ibb.co/GWmKB80/5a.jpg',
        imgB: 'https://i.ibb.co/VY2kM7c/5b.jpg'
    },
    {   
        id: 6,
        name: 'Notebook Gigabyte G5',
        description: {
            maker: 'Gigabyte',
            processor: 'i5',
            ram: '16',
            memory: '512',
            gi: 'RTX 3060',
            so: 'W11'
        },
        price: 379440,
        off: 15,
        stock: false,
        imgA: 'https://i.ibb.co/qk8v2dF/6a.png',
        imgB: 'https://i.ibb.co/Bwt6BDX/6b.jpg'
    }
];
//console.log(products[3].description.processor.includes('')); true