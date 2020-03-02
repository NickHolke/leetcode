const subtractProductAndSum = (n) => {
  let digits = n.toString().split('');
  let product = digits.reduce((a,b) => Number(a) * Number(b));
  let sum = digits.reduce((a,b) => Number(a) + Number(b));
  
  return product - sum;
};