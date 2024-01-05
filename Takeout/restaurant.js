const cart = [];
const price = [];
const removeButton = document.querySelectorAll('#removeItem');


const foodItems = [
    {
        name: "Poke Nachos",
        price: 10,
    },

    {
        name: "Shoyu Chicken Plate",
        price: 12,
    },

    {
        name: "Kalua Pork Plate",
        price: 15,
    },

    {
        name: "Loco Moco",
        price: 12,
    },

    {
        name: "Malasadas",
        price: 8,
    }

]

removeButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log(cart)
    });
});


function addToCart() {
    cartItems = JSON.stringify(cart);
    document.getElementById('cartItems').innerHTML = cartItems
    console.log(cartItems)
}

function total() {
    sum = price.reduce(function (accumVariable, curValue) {
        return accumVariable + curValue
    }, 0);
    console.log(sum)
    document.getElementById('total').innerHTML = "$" + sum;
    addToCart();
}


function addPoke() {
    let item = foodItems[0];
    let quantity = document.getElementById('poke-quantity').value;
    let totalAmt = quantity * item.price;
    console.log(totalAmt)
    price.push(totalAmt)
    cart.push(quantity, item.name)
    console.log(cart)
    addToCart()
    total()
}

function addChicken() {
    let item = foodItems[1];
    let quantity = document.getElementById('chicken-quantity').value;
    let totalAmt = quantity * item.price;
    console.log(totalAmt)
    price.push(totalAmt)
    cart.push(quantity, item.name)
    console.log(cart)
    addToCart()
    total()
}

function addPork() {
    let item = foodItems[2];
    let quantity = document.getElementById('pork-quantity').value;
    let totalAmt = quantity * item.price;
    console.log(totalAmt)
    price.push(totalAmt)
    cart.push(quantity, item.name)
    console.log(cart)
    addToCart()
    total()
}

function addLoco() {
    let item = foodItems[3];
    let quantity = document.getElementById('loco-quantity').value;
    let totalAmt = quantity * item.price;
    console.log(totalAmt)
    price.push(totalAmt)
    cart.push(quantity, item.name)
    console.log(cart)
    addToCart()
    total()
}

function addDes() {
    let item = foodItems[4];
    let quantity = document.getElementById('des-quantity').value;
    let totalAmt = quantity * item.price;
    console.log(totalAmt)
    price.push(totalAmt)
    cart.push(quantity, item.name)
    console.log(cart)
    addToCart()
    total()
}