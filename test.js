const input = 20;
console.log(eval(input).toLocaleString());
const percentage = 20;

const math = () => {
  return eval(String(percentage * (input / 100)));
};

console.log(math())
