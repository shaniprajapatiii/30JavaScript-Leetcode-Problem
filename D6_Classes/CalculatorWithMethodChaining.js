class Calculator {

   /** 
    * @param {number} value
    */
   constructor(value) {
      this.result = value;
   }

   /** 
    * @param {number} value
    * @return {Calculator}
    */
   add(value) {
      this.result += value;
      return this;
   }

   /** 
    * @param {number} value
    * @return {Calculator}
    */
   subtract(value) {
      this.result -= value;
      return this;
   }

   /** 
    * @param {number} value
    * @return {Calculator}
    */
   multiply(value) {
      this.result *= value;
      return this;
   }

   /** 
    * @param {number} value
    * @return {Calculator}
    */
   divide(value) {
      if (value === 0) {
         throw new Error("Division by Zero is not allowed");
      }
      this.result /= value;
      return this;
   }

   /** 
    * @param {number} value
    * @return {Calculator}
    */
   power(value) {
      this.result = Math.pow(this.result, value);
      return this;
   }

   /** 
    * @return {number}
    */
   getResult() {
      return this.result;
   }
}


const calc = new Calculator(10);
console.log(calc.add(5).getResult()); // 15
console.log(calc.subtract(3).getResult()); // 12
console.log(calc.multiply(2).getResult()); // 24
console.log(calc.divide(2).getResult()); // 12
console.log(calc.power(2).getResult()); // 144