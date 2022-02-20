let price = 5;
let quantity = 2;
let total = price * quantity;

// 使用 set，确保不会存在相同的 effect
let dep = new Set();

// 当前需要保存的代码，当源数据更新后，需要重新调用
let effect = () => {
  total = price * quantity;
};

function track() {
  dep.add(effect);
}

function trigger() {
  dep.forEach((effect) => effect());
}

function printTotal() {
  console.log(`total is ${total}`);
}

// track();   保存代码
// effect();  重新调用
// trigger(); 保存过的代码重新运行

track();

price = 20;

printTotal();

trigger();

printTotal();

quantity = 3;

trigger();

printTotal();
