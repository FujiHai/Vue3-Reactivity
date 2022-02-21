function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      return Reflect.get(target, key, receiver);
    },

    set(target, key, value, receiver) {
      return Reflect.set(target, key, value, receiver);
    },
  };

  return new Proxy(target, handler);
}

let product = reactive({ price: 5, quantity: 2 });

let proxiedProduct = new Proxy(product, {});

proxiedProduct.quantity = 4;

console.log(proxiedProduct.quantity);
