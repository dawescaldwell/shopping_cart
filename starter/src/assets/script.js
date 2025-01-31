const cherry = {
  image: "./images/cherry.jpg",
  name: "Carton of Cherries",
  price: 4,
  productId: 1,
  quantity: 0
};

const strawberry = {
  image: "./images/strawberry.jpg",
  name: "Box of Strawberries",
  price: 5,
  productId: 2,
  quantity: 0
};

const orange = {
  image: "./images/orange.jpg",
  name: "Bag of Oranges",
  price: 10,
  productId: 3,
  quantity: 0
};

const products = [cherry, orange, strawberry];
const cart = [];

function addProductToCart(id) {
  let selectedProduct = products.find(product => product.productId === id);
  if (!selectedProduct) return;

  selectedProduct.quantity += 1;
  if (!cart.includes(selectedProduct)) {
    cart.push(selectedProduct);
  }
}

function removeProductFromCart(id) {
  let selectedProduct = cart.find(product => product.productId === id);
  if (!selectedProduct) return;

  selectedProduct.quantity = 0;
  let index = cart.indexOf(selectedProduct);
  cart.splice(index, 1);
}

function increaseQuantity(id) {
  let selectedProduct = cart.find(product => product.productId === id);
  if (!selectedProduct) return;

  selectedProduct.quantity += 1;
}

function decreaseQuantity(id) {
  let selectedProduct = cart.find(product => product.productId === id);
  if (!selectedProduct) return;

  selectedProduct.quantity -= 1;
  if (selectedProduct.quantity === 0) {
    removeProductFromCart(id);
  }
}

function emptyCart() {
  cart.forEach(item => item.quantity = 0);
  cart.length = 0;
}

function cartTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.quantity * item.price;
  });
  return total;
};

function pay(amountPaid) {
  let toBePaid = amountPaid - cartTotal()
  return toBePaid
};

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay,
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
