interface Diff {
  amount: number;
  array: string[];
}

function getDiff(firstStr: string, secondStr: string): Diff {
  let firstArr: string[] = firstStr.split("");
  let secondArr: string[] = secondStr.split("");

  let result = firstArr
    .filter((item) => !secondArr.includes(item))
    .concat(secondArr.filter((item) => !firstArr.includes(item)));

  return {
    amount: result.length,
    array: result,
  };
}

console.log(getDiff("abc", "abcd")); // { amount: 1, array: ['d'] }
console.log(getDiff("abcd", "cdfe")); // { amount: 4, array: ['a', 'b', 'f', 'e'] }
console.log(getDiff("abc", "wbbcc")); // { amount: 2, array: ['a', 'w'] }
console.log(getDiff("abc", "abc")); // { amount: 0, array: [] }
