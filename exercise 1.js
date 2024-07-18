function tree(){
    let x = " "
    for(let i=0; i<5; i++){
    x += '* ';
    console.log(x);
    }
} 

tree();

function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  const num1 = 56;
  const num2 = 98;
  
  const result = gcd(num1, num2);
  console.log(`The GCF of ${num1} and ${num2} is ${result}`);
  
