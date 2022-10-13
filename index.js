function reverseNumber(num) {
  //convert num into absolute value
  const n = Math.abs(num);
  //convert absolute value of number into string
  let numString = String(n);
  //split string, reverse its order, rejoin and convert it back to a number
  let newNum  = Number(numString.split('').reverse().join(''));
  //return number, check if value was negative to begin and add negtive back on. 
  return (num >= 0 ? newNum : (-(newNum)));
}


console.log(reverseNumber(456)); // should log 654
console.log(reverseNumber(1000)); // should log 1
console.log(reverseNumber(-789)); // should log -987

