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

/*
JWT_SECRET=veryveryverysecret32123
MONGODB_URI=mongodb+srv://amazona:Zafer123@cluster0.8zf3hij.mongodb.net/amazona?retryWrites=true&w=majority
PAYPAL_CLIENT_ID=AdqCBCJftJLNjp2AqG6HyRZ4bqjUFdCIJPLDdmuUfPJOFFDFHGEK8RcL8bQCdFOPtTBo-EgzxrdX8oG_ 
CLOUDINARY_CLOUD_NAME=ddcvpsdkc
CLOUDINARY_API_KEY=351523322863511
CLOUDINARY_URL=cloudinary://351523322863511:PmOFkMGCpndIChO8JH8gvsKM4-U@ddcvpsdkc
CLOUDINARY_API_SECRET=PmOFkMGCpndIChO8JH8gvsKM4-U
GOOGLE_API_KEY=AIzaSyCG3FfhRyZ6lJpEJrUIMqPFGeH0rykNrJk
MAILGUN_DOMIAN=sandboxea2f7c6e394648e9b817e77b3ff7fe93.mailgun.org
MAILGUN_API_KEY=1fbf0ae6951b37ed672700b231e4c6b8-d1a07e51-abc6ce30
mongodb+srv://amazona:Zafer123@cluster0.fzdwdpo.mongodb.net/amazona?retryWrites=true&w=majority
mongodb+srv://amazona:Zafer123@cluster0.8zf3hij.mongodb.net/amazona?retryWrites=true&w=majority
mongodb://localhost/amazona*/
export default data;
