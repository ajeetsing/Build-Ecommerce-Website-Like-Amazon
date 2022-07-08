import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'ajeet',
      email: 'ajeet@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'sujeet',
      email: 'sujeet@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'shubham',
      email: 'shubham@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 12,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 10,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Lacoste Free Shirt',
      slug: 'Lacoste Free Shirt',
      category: 'Shirts',
      image: '/images/p11.jpg',
      price: 22,
      countInStock: 5,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Lacoste Fit Shirt',
      slug: 'Lacoste Fit Shirt',
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 20,
      countInStock: 15,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      // _id: '5',
      name: 'Lacoste Slim Shirt',
      slug: 'Lacoste Slim Shirt',
      category: 'Shirts',
      image: '/images/p5.jpg',
      price: 2220,
      countInStock: 5,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      // _id: '6',
      name: 'Nike Slim Pant',
      slug: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 78,
      countInStock: 12,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '7',
      name: 'Puma Slim Pant',
      slug: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/p7.jpg',
      price: 27,
      countInStock: 9,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '8',
      name: 'Adidas Fit Pant',
      slug: 'Adidas Fit Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 39,
      countInStock: 3,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
