/**
 * dep: 每个响应式数据是一个 effect 集(Set)。Set 中存储的就是操作数据的函数
 *
 */
const depsMap = new Map();

function track(key) {
  let dep = depsMap.get(key);

  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }

  dep.add(effect);
}

function trigger(key) {
  let dep = depsMap.get(key);

  if (dep) {
    dep.forEach((effect) => {
      effect();
    });
  }
}

let product = { price: 5, quantity: 2 };
let total = 0;

let effect = () => {
  total = product.price * product.quantity;
};

function printTotal() {
  console.log(`total is ${total}`);
}

track("quantity");
effect();
printTotal();

product.quantity = 3;
trigger("quantity");
printTotal();
