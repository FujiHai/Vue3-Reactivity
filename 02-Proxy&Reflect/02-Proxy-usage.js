let product = { price: 5, quantity: 2 };

let proxiedProduct = new Proxy(product, {
  get(target, key, receiver) {
    console.log("Get was called with key = " + key);
    // return target[key];
    // console.log("proxiedProduct === receiver", proxiedProduct === receiver);
    // receiver 用于确定 this 指向
    return Reflect.get(target, key, receiver);
  },

  set(target, key, value, receiver) {
    console.log("Set was called with key = " + key + " and value = " + value);
    return Reflect.set(target, key, value, receiver);
  },
});

proxiedProduct.quantity = 4;

console.log(proxiedProduct.quantity);
