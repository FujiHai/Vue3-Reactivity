let product = { price: 5, quantity: 2 };

console.log("quantity is " + product.quantity);

console.log("quantity is " + product[`quantity`]);

console.log("quantity is " + Reflect.get(product, "quantity"));
