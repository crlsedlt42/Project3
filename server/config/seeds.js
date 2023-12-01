const db = require('./connections');
const { Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('User', 'users');
    await cleanDB('Product', 'products');
    await cleanDB('Category', 'categories');

    const categories = await Category.insertMany([
        { name: 'Jewelery' },
        { name: 'Hoodies' },
        { name: 'T-Shirts' },
        { name: 'Hats' }
    ]);

    console.log('categories seeded');

    await Product.insertMany([
        {
            name: 'Jaguar Pendant',
            description:
                'A silver jaguar pendant on a silver chain',
            image: 'pendant-jaguar.png',
            category: categories[0]._id,
            price: 99.99,
            quantity: 10
        },
        {
            name: 'Death Eater Pendant',
            description:
                'A silver pendant with the Dark Mark on it',
            image: 'pendant-skull-and-snake.png',
            category: categories[0]._id,
            price: 149.99,
            quantity: 10
        },
        {
            name: 'Infinity Circle Pendant',
            description: 'A silver pendant with an intregate circle design',
            image: 'pendant-circles.png',
            category: categories[0]._id,
            price: 100.00,
            quantity: 50
        },
        {
            name: 'Silver Eagle Pendant',
            description: 'A silver pendant with a fierce eagle design',
            image: 'pendant-eagle.png',
            category: categories[0]._id,
            price: 150.00,
            quantity: 50
        },
        {
            name: 'Rose Gold Tree of Life Pendant',
            description: 'A rose gold pendant with a tree of life design',
            image: 'pendant-tree.png',
            category: categories[0]._id,
            price: 200.00,
            quantity: 50
        },
        {
            name: 'SilverBack Gorilla Pendant',
            description: 'A silver pendant with a JACKED gorilla design',
            image: 'pendant-ape.png',
            category: categories[0]._id,
            price: 150.00,
            quantity: 50
        },
        {
            name: 'Silver Monkey Pendant',
            description: 'A silver pendant with a JACKED monkey design',
            category: categories[0]._id,
            image: 'pendant-monkey.png',
            price: 120.00,
            quantity: 50
        },
        {
            name: 'Turbulent Silver Pendant',
            description: 'A silver pendant with a turbulent flow design',
            category: categories[0]._id,
            image: 'pendant-abstract.png',
            price: 150.00,
            quantity: 50
        },
        {
            name: 'Rose Gold Butterfly Ring',
            description: 'A rose gold ring with a butterfly design',
            category: categories[0]._id,
            image: 'ring-gold-and-silver-butterfly1.png',
            price: 100.00,
            quantity: 50
        },
        {
            name: 'Black and Gold Butterfly Ring',
            description: 'A black and gold ring with a butterfly design',
            category: categories[0]._id,
            image: 'ring-gold-and-silver-butterfly3.png',
            price: 200.00,
            quantity: 50
        },
        {
            name: 'Gold Dove Ring',
            description: 'A gold ring with a dove design',
            category: categories[0]._id,
            image: 'ring-gold-bird.png',
            price: 175.00,
            quantity: 50
        },
        {
            name: 'Gold Heritance Ring',
            description: 'A gold ring for men',
            category: categories[0]._id,
            image: 'ring-gold-solid.png',
            price: 200.00,
            quantity: 50
        },
        {
            name: 'Rose Gold Tree of Life Ring',
            description: 'A rose gold ring with a tree of life design',
            category: categories[0]._id,
            image: 'ring-gold-tree.png',
            price: 210.00,
            quantity: 50
        },
        {
            name: 'Silver Gothic Ring',
            description: 'A silver ring with a gothic design',
            category: categories[0]._id,
            image: 'ring-silver-abs-gothic.png',
            price: 110.00,
            quantity: 50
        },
        {
            name: 'Silver Eyes of the Multiverse Ring',
            description: 'A silver ring with multiple eyes as the main design concept',
            category: categories[0]._id,
            image: 'ring-silver-eyes.png',
            price: 150.00,
            quantity: 50
        },
        {
            name: 'Silver Cubic Ring',
            description: 'A silver ring with a cubic design',
            category: categories[0]._id,
            image: 'ring-silver-solid.png',
            price: 110.00,
            quantity: 50
        },
        {
            name: 'Black Walkin Hoodie',
            description: `A black hoodie with our famous Walkin' design`,
            category: categories[1]._id,
            image: 'black-hoodie-back-WalkIn990.png',
            price: 75.00,
            quantity: 50
        },
        {
            name: 'Plain T-Shirt',
            description:
                'No fancy logos or designs, just a plain t-shirt',
            category: categories[0]._id,
            image: 'white-shirt-back990.png',
            price: 9.99,
            quantity: 100
        },
        {
            name: 'Remember Me T-Shirt',
            description:
                'An unforgettable t-shirt you will remember forever',
            category: categories[2]._id,
            image: 'white-shirt-front-RememberMe990.png',
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
            name: 'Mitchell & Ness Hat',
            description:
                'Stylish hat of your favorite sports team, with a 90s retro look',
            category: categories[3]._id,
            price: 79.99,
            quantity: 50
        },
    ]);

    console.log('products seeded');

process.exit();

});

// {
//     name: '',
//     description: '',
//     category: categories[0]._id,
//     price: 0,
//     quantity: 50
// },