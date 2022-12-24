import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'Sometimes you just have to keep things simple. No fuss. Easy. Enter this adidas t-shirt. Its one step up from completely minimalist, since there is the bold, contrast adidas graphic that flashes across the chest. But it is something that goes along with your everyday moves, whatever that looks like, and keeps you comfortable along the way (thanks to the soft cotton build). adidas Unisex clothes mixing comfort, style and performance.',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'Sometimes you just have to keep things simple. No fuss. Easy. Enter this adidas t-shirt. Its one step up from completely minimalist, since there is the bold, contrast adidas graphic that flashes across the chest. But it is something that goes along with your everyday moves, whatever that looks like, and keeps you comfortable along the way (thanks to the soft cotton build). adidas Unisex clothes mixing comfort, style and performance.',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'Sometimes you just have to keep things simple. No fuss. Easy. Enter this adidas t-shirt. Its one step up from completely minimalist, since there is the bold, contrast adidas graphic that flashes across the chest. But it is something that goes along with your everyday moves, whatever that looks like, and keeps you comfortable along the way (thanks to the soft cotton build). adidas Unisex clothes mixing comfort, style and performance.',
    },
  ],
};
export default data;
