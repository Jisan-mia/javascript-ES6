function add(num1, num2=30){
    num2 = num2 || 20;
    
    return num1+num2;
}
const total = add(15, 20);
console.log(total)