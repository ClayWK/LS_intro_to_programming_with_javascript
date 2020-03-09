repeat(3, 'ha'); // 'hahaha'

function repeat (times, str) {
  let repeatStr = str;
  for (let i = 1; i < times; i += 1) {
    repeatStr = repeatStr.concat(str)
  }
  if (times > 0) {
    console.log(repeatStr); 
  }
}

repeat2(3, 'ha');

function repeat2(n, str) {
  let repeatStr = '';

  while (n > 0) {
    repeatStr += str;
    n -= 1;
  }

  console.log(repeatStr);
}