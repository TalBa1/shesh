import bcrypt from 'bcrypt';
const salt = await bcrypt.genSalt(10);
const data = {
  users: [
    {
      name: 'Talha',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345', salt),
      isAdmin: true,
    },
    {
      name: 'Jhon',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345', salt),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInstock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high qualilty shirt',
    },
    {
      //_id: '2',
      name: 'Adidas Fit shirt',
      slug: 'Adidas-Fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInstock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high qualilty product',
    },
    {
      //_id: '3',
      name: 'Nike Slim Pant',
      slug: 'Nike-Slim-Pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInstock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high qualilty product',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'Adidas-Fit-Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInstock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high qualilty product',
    },
  ],
};

export default data;
