let result = 0;
let set = n => result = n;
let add = n => result += n;
let sub = n => result -= n;
let mult = n => result *= n;
let div = n => result /= n;


module.exports = {
  set,
  add,
  sub,
  mult,
  div,
};