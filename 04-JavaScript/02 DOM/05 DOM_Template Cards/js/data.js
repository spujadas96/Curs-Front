// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        img: 'assets/img/shop_01.jpg'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
        img: 'assets/img/shop_02.jpg'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        img: 'assets/img/shop_03.jpg'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
        img: 'assets/img/shop_04.jpg'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
        img: 'assets/img/shop_05.jpg'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
        img: 'assets/img/shop_06.jpg'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes',
        img: 'assets/img/shop_07.jpg'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
        img: 'assets/img/shop_08.jpg'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        img: 'assets/img/shop_09.jpg'
    },
    {
        id: 10,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        img: 'assets/img/shop_10.jpg'
    },
    {
        id: 11,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        img: 'assets/img/shop_11.jpg'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cart = [];

// Improved version of cart. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};

var subtotals = {
    grocery: 0,
    beauty: 0,
    clothes: 0
};

var total = 0;
