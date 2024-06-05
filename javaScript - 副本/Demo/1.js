// 是不是质数？
function isPrime(n) {
  for (var i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      // console.log(i);
      break
    }
  }

  /*if (i <= n / 2) {
    // console.log(`不是`);
    return false
  } else {
    // console.log(`是`);
    return true
  }*/

  return i > n / 2
}