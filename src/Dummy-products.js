import image1 from './assets/photos/image1.avif';
import image2 from './assets/photos/image2.avif';
import chinosImage from './assets/photos/image3.avif';
import bootsImage from './assets/photos/image4.avif';
import hoodieImage from './assets/photos/image5.avif';
import joggersImage from './assets/photos/image6.avif';

const products = [
  {
    id: 'p1',
    name: 'Classic Denim Jacket',
    price: 59.99,
    description: 'Stylish and durable denim jacket, perfect for casual wear.',
    imageURL: image1,
    inStock: true,
    quantity:1,
    selected:false
  },
  {
    id: 'p2',
    name: 'Graphic T-Shirt',
    price: 19.99,
    description: 'Comfortable cotton t-shirt with a unique graphic design.',
    imageURL: image2,
    inStock: false,
    quantity:1,
    selected:false
  },
  {
    id: 'p3',
    name: 'Slim Fit Chinos',
    price: 34.99,
    description: 'Versatile slim-fit chinos, great for both casual and formal occasions.',
    imageURL: chinosImage,
    inStock: true,
    quantity:1,
    selected:false
  },
  {
    id: 'p4',
    name: 'Leather Boots',
    price: 79.99,
    description: 'High-quality leather boots with a durable sole, ideal for any season.',
    imageURL: bootsImage,
    inStock: true,
    quantity:1,
    selected:false
  },
  {
    id: 'p5',
    name: 'Hooded Sweatshirt',
    price: 29.99,
    description: 'Cozy hoodie with a kangaroo pocket, perfect for cool weather.',
    imageURL: hoodieImage,
    inStock: true,
    quantity:1,
    selected:false
  },
  {
    id: 'p6',
    name: 'Athletic Joggers',
    price: 24.99,
    description: 'Comfortable athletic joggers made from breathable fabric.',
    imageURL: joggersImage,
    inStock: false,
    quantity:1,
    selected:false
  },
];

export default products;
