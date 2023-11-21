const db = require('./db');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('User', 'users');
    await cleanDB('Product', 'products');
    await cleanDB('Category', 'categories');

    const categories = await Category.insertMany([
        { name: 'Shirts' },
        { name: 'Pants' },
        { name: 'Shoes' },
        { name: 'Hats' }
    ]);

    console.log('categories seeded');

    const products = await Product.insertMany([
        {
            name: 'Plain T-Shirt',
            description:
                'No fancy logos or designs, just a plain t-shirt',
            category: categories[0]._id,
            price: 9.99,
            quantity: 100
        },
        {
            name: 'Cargo Pants',
            description:
                'Pants that you can use to carry more than just your legs',
            category: categories[1]._id,
            price: 29.99,
            quantity: 50
        },
        {
            name: 'Baseball Hat',
            description:
                'A hat that has a picture of a baseball on it',
            category: categories[3]._id,
            price: 19.99,
            quantity: 20
        },
        {
            name: 'Running Sneakers',
            description:
                'Protective, durable, and fashionable sneakers for running',
            category: categories[2]._id,
            price: 79.99,
            quantity: 0
        },
    ]);

    console.log('products seeded');

    await User.create({
        firstName: 'George',
        lastName: 'Washington',
        email: 'georgewashington@email.com',
        password: 'password12345',
        orders: [
            {
                products: [products[0]._id, products[1]._id]
            }
        
        ]
    });

    await User.create({
        firstName: 'Elon',
        lastName: 'Musk',
        email: 'ElonMuskX@telsa.com',
    });


console.log('users seeded');

process.exit();

});