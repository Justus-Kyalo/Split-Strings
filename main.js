function solution(str) {
  let pairs = [];
  let str_length = str.length;

  for (let i = 0; i < str_length; i += 2) {
    let pair = str.slice(i, i + 2);
    pairs.push(pair);

    if (str_length % 2 === 1 && i === str_length - 1) {
      pairs[pairs.length - 1] += "_";
    }
  }

  return pairs;
}
