function flipCoin() {
  return new Promise((resolve, reject) => {
    const result = Math.random();

    if (result > 0.5) {
      resolve("🎉 You win!");
    } else {
      reject(new Error("❌ You lose!"));
    }
  });
}

const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data.slip.advice;
  } catch (error) {
    console.log("⚠️ Error fetching advice:", error.message);
  }
};

const playGame = async () => {
  try {
    const result = await flipCoin();
    console.log(result);

    const advice = await fetchAdvice();
    if (advice) {
      console.log("💡 Advice:", advice);
    }
  } catch (error) {
    console.log(error.message);
  }
};

playGame();
