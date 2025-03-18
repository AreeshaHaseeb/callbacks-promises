function flipCoin() {
    return new Promise((resolve, reject) => {
      let result = Math.random(); // Generates a random number between 0 and 1
      if (result > 0.5) {
        resolve("You win!"); 
      } else {
        reject(new Error("You lose!")); 
      }
    });
  }
  
  function fetchAdvice() {
    return fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => data.slip.advice);
  }

  flipCoin()
  .then((message) => {
    console.log(message); 
    return fetchAdvice(); 
  })
  .then((advice) => {
    console.log("Advice:", advice); 
  })
  .catch((error) => {
    console.error(error.message); // 
  });