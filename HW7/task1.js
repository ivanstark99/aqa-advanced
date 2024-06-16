function handleNum(number, handleEvenCallback, handleOddCallback) {
    if (number % 2 === 0) {
      handleEvenCallback(number); 
    } else {
      handleOddCallback(number); 
    }
  }
  
  function handleEven(number) {
    console.log(`${number} is even`);
  }
  
  function handleOdd(number) {
    console.log(`${number} is odd`);
  }
  
  handleNum(10, handleEven, handleOdd); // Виведе: "10 is even"
  handleNum(7, handleEven, handleOdd);  // Виведе: "7 is odd"