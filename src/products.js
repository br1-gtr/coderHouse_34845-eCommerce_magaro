import img0A from './assets/img/0a.jpg';
import img0B from './assets/img/0b.jpg';
import img1A from './assets/img/1a.jpg';
import img1B from './assets/img/1b.jpg';
import img2A from './assets/img/2a.jpg';
import img2B from './assets/img/2b.jpg';
import img3A from './assets/img/3a.jpg';
import img3B from './assets/img/3b.jpg';
import img4A from './assets/img/4a.jpg';
import img4B from './assets/img/4b.jpg';


export const products = [
    {   
        id: 0,
        name: 'Notebook Asus TUF',
        description: {
            processor: 'i5',
            ram: '16',
            memory: 512,
            gi: 'RTX 3050',
            so: 'W11'
        },
        price: 425000,
        off: 15,
        stock: true,
        imgA: img0A,
        imgB: img0B
    },
    {   
        id: 1,
        name: 'Notebook Acer Nitro 5',
        description: {
            processor: 'i5',
            ram: '8',
            memory: 512,
            gi: 'RTX 3050',
            so: 'W10'
        },
        price: 258000,
        off: 10,
        stock: false,
        imgA: img1A,
        imgB: img1B
    },
    {   
        id: 2,
        name: 'Notebook Asus ZenBook Duo',
        description: {
            processor: 'i7',
            ram: '32',
            memory: 512,
            gi: 'MX450',
            so: 'W11'
        },
        price: 458800,
        off: 10,
        stock: true,
        imgA: img2A,
        imgB: img2B
    },
    {   
        id: 3,
        name: 'Notebook Asus Vivobook Pro 15',
        description: {
            processor: 'R9',
            ram: '16',
            memory: 512,
            gi: 'RTX 3050',
            so: 'W11'
        },
        price: 481000,
        off: 20,
        stock: false,
        imgA: img3A,
        imgB: img3B
    },
    {   
        id: 4,
        name: 'Notebook Asus X515',
        description: {
            processor: 'i3',
            ram: '4',
            memory: 256,
            gi: undefined,
            so: 'W10'
        },
        price: 127000,
        off: 5,
        stock: true,
        imgA: img4A,
        imgB: img4B
    }
];
