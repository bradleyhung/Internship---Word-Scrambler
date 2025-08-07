// === Global Variables ===
let originalWord = "";
var score = 0;
var incorrect_guess = 0;
let remainingTerms = [];

// === Audio ===
const audioWin = new Audio(
  "https://www.myfili.com/wp-content/uploads/2024/07/lessson-complete.mp3"
);
const audioCorrect = new Audio(
  "https://www.myfili.com/wp-content/uploads/2024/07/correct.mp3"
);
const audioIncorrect = new Audio(
  "https://www.myfili.com/wp-content/uploads/2024/07/incorrect2.mp3"
);

// Word list of definitions
const wordList_LessonOne = [
  {
    word: "Real Estate",
    definition:
      "Land and anything permanently attached to it, including buildings, trees, and minerals.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/realestate.jpeg",
  },
  {
    word: "Real Property",
    definition:
      "Refers to the rights associated with the ownership of real estate, encompassing the land and anything permanently attached, as well as the bundle of rights that comes with ownership.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/realProperty.jpg",
  },
  {
    word: "Personal Property",
    definition:
      "Moveable items not permanently attached to land or buildings (e.g., furniture, cars, electronics).",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/personalProperty.jpg",
  },
  {
    word: "Land",
    definition:
      "The earth's surface, extending downward to the center of the earth and upward to infinity, including natural resources such as water and minerals.",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/land.jpg",
  },
  {
    word: "Improvements",
    definition:
      "Any artificial thing attached to land, such as buildings, fences, roads, or septic systems.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/improvements.jpg",
  },
  {
    word: "Immobility",
    definition:
      "A physical characteristic of land meaning it cannot be moved from one place to another.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/immobility.jpg",
  },
  {
    word: "Indestructibility",
    definition:
      "A physical characteristic of land meaning it cannot be destroyed or worn out.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/indestructibility.jpg",
  },
  {
    word: "Uniqueness",
    definition:
      "A physical characteristic of land meaning no two parcels of land are exactly alike.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/uniqueness.jpg",
  },
  {
    word: "Scarcity",
    definition:
      "An economic characteristic of land meaning the supply of land is finite, contributing to its value.",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/scarcity.jpg",
  },
  {
    word: "Situs",
    definition:
      "An economic characteristic of land referring to the economic value derived from a property's location (e.g., proximity to amenities, jobs, schools).",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/Situs.jpg",
  },
  {
    word: "Residential Real Estate",
    definition:
      "Property used for housing, such as single-family homes, condominiums, and apartments.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/Residential-Real-Estate.jpg",
  },
  {
    word: "Commercial Real Estate",
    definition:
      "Property used for business activities, such as office buildings, retail stores, and hotels.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/Commercial-Real-Estate.webp",
  },
  {
    word: "Industrial Real Estate",
    definition:
      "Property used for manufacturing, production, distribution, or storage, such as factories and warehouses.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/Industrial-Real-Estate.webp",
  },
  {
    word: "Raw Land",
    definition: "Undeveloped land that does not have structures or utilities.",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/Raw-Land.jpg",
  },
];

const wordList_LessonTwo = [
  {
    word: "Budget",
    definition:
      "A detailed plan for managing your money, showing your income and expenses over a period of time.",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/Budget.jpg",
  },
  {
    word: "Income",
    definition:
      "Money received, especially on a regular basis, for work or through investments.",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/income.jpg",
  },
  {
    word: "Expenses",
    definition: "Money spent on goods and services.",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/expenses.jpg",
  },
  {
    word: "Savings",
    definition:
      "Money set aside for future use, rather than spending it immediately.",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/savings.jpg",
  },
  {
    word: "Emergency Fund",
    definition:
      "Money saved specifically to cover unexpected expenses or a loss of income, typically 3-6 months of living expenses.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/emergency-fund.jpg",
  },
  {
    word: "Down Payment",
    definition:
      "An initial upfront payment made when purchasing a large item, such as a house, typically a percentage of the total purchase price.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/down-payment.jpg",
  },
  {
    word: "Credit",
    definition:
      "The ability of a customer to obtain goods or services before payment, based on the trust that payment will be made in the future.",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/credit.jpg",
  },
  {
    word: "Credit Score",
    definition:
      "A numerical rating that represents a person's creditworthiness, used by lenders to assess risk.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/credit-score.jpg",
  },
  {
    word: "Credit Report",
    definition:
      "A detailed summary of an individual's credit history, including credit accounts, payment history, and public records.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/credit-report.jpg",
  },
  {
    word: "Debt",
    definition:
      "Money owed by one party (the debtor) to another party (the creditor).",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/debt.jpg",
  },
  {
    word: "Good Debt",
    definition:
      "Debt that helps you acquire an asset or increase your net worth (e.g., a mortgage, student loans for a valuable degree).",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/good_debt.jpg",
  },
  {
    word: "Bad Debt",
    definition:
      "Debt incurred for depreciating assets or consumption, often with high interest rates (e.g., credit card debt for discretionary purchases).",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/bad_debt.jpg",
  },
];

const wordList_LessonThree = [
  {
    word: "Personal Balance Sheet",
    definition:
      "A snapshot of an individual's financial position at a specific point in time, showing assets, liabilities, and net worth.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/Personal-Balance-Sheet.jpg",
  },
  {
    word: "Assets",
    definition:
      "Anything of value owned by an individual (e.g., cash, savings, investments, real estate, car).",
    imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/Assets.jpg",
  },
  {
    word: "Liabilities",
    definition:
      "Financial obligations or debts owed to others (e.g., loans, credit card balances, mortgage).",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/liabilities.jpg",
  },
  {
    word: "Net Worth",
    definition:
      "The value of all financial and non-financial assets owned minus the value of all outstanding liabilities. Formula: Assets - Liabilities = Net Worth",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/f89007d7-9ff4-49b6-8baf-617802731d6c.jpg",
  },
  {
    word: "Financial Goals",
    definition:
      "Specific objectives related to money management and accumulation (e.g., buying a home, saving for retirement).",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/61180ef6-9974-4397-a5ab-0094c79c6407.jpg",
  },
  {
    word: "SMART Goals",
    definition:
      "A framework for setting goals that are Specific, Measurable, Achievable, Relevant, and Time-bound.",
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/smart_goals.jpg",
  },
];

//funtion to remove intro tag
function removeIntro() {
  const introText = document.getElementById("intro-text");
  introText.classList.add("hide");
  const myBttn = document.getElementById("start-scrambler");
  myBttn.classList.add("hide");
  const myImg = document.getElementById("intro-img");
  myImg.classList.add("hide");
  const start = document.getElementById("main-game");
  start.classList.remove("hide");
}

// Function to generate a random word from the word list
function getRandomWord(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex].word;
}

// Function to shuffle the letters of a word
function shuffleWord(word) {
  // Split words by space into a list
  word_list = word.split(" ");
  // Randomize split words separately and put it back to list
  for (let i = 0; i < word_list.length; i++) {
    let chars = word_list[i].split("");
    let shuffled = chars.sort(() => Math.random() - 0.5);
    word_list[i] = shuffled;
  }
  // Join the words from list back to a string
  result = word_list.map((item) => item.join("")).join(" ");
  return result;
}

// Function to get the definition of a word from the list
function getDefinition(word, list) {
  const entry = list.find((item) => item.word === word);
  const def = (document.getElementById("definition").innerHTML = entry
    ? entry.definition
    : "Definition not found.");
  return def;
}

// Function to check if the user's guess is correct
function checkGuess(input, originalWord) {
  if (input.toLowerCase() === originalWord.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

// Initialize the game with a random word and its definition
function startGame() {
  let subBttn = document.getElementById("check-btn");
  subBttn.classList.remove("hide");

  let lowerText = document.getElementById("feedback");
  lowerText.innerText = "";

  // originalWord = getRandomWord(lesson);
  // getDefinition(originalWord, lesson);
  // const entry = lesson.find(item => item.word === originalWord);

  const index = Math.floor(Math.random() * remainingTerms.length);
  const entry = remainingTerms.splice(index, 1)[0];
  originalWord = entry.word;
  getDefinition(originalWord, wordList_LessonOne);

  document.getElementById("wordImage").src = entry.imageUrl;

  let shuffledWord = shuffleWord(originalWord);
  console.log(`Random word: ${shuffledWord}`);
  const sWordElement = document.getElementById("sWord");
  sWordElement.innerHTML = `Unscramble the word: <span id="scrambledWord">${shuffledWord}</span>`;
}

// startGame(wordList_LessonOne);
remainingTerms = [...wordList_LessonOne];
startGame();

// Function to reset the game
function resetGame() {
  score = 0;
  incorrect_guess = 0;

  remainingTerms = [...wordList_LessonOne];

  document.getElementById("score").innerText = "Score: " + score;
  document.getElementById("incorrect-guess").innerText =
    "Wrong Guess: " + incorrect_guess;
  startGame();
}

// Add event listener for the "New Game" button
const newGameElement = document.getElementById("new-game");
newGameElement.addEventListener("click", resetGame);

// Add event listener for the "Submit" button
document.getElementById("check-btn").addEventListener("click", function () {
  if (
    checkGuess(document.getElementById("guessInput").value.trim(), originalWord)
  ) {
    score += 1; // Increment score on correct guess
    console.log(`Score: ${score}`);
    document.getElementById("score").innerText = `Score: ${score}`;
    if (score != 5) {
      startGame();
      playGameSound("correct");
    }
    let corrText = document.getElementById("feedback");
    corrText.classList.remove("incorrect");
    corrText.classList.add("correct");
    corrText.textContent = "Last guess: Correct!";
    document.getElementById("guessInput").value = "";
    if (score >= 5) {
      playGameSound("win");
      document.getElementById("check-btn").classList.add("hide");
      document.getElementById("new-game").innerText = `Play Again`;
      document.getElementById("guessInput").value = "";
      document.getElementById(
        "feedback"
      ).textContent = `Congratulations!! You've beat the game!`;
    }
  } else {
    incorrect_guess += 1; // Increment incorrect guess
    playGameSound("incorrect");
    console.log(`Incorrect Score: ${incorrect_guess}`);
    document.getElementById(
      "incorrect-guess"
    ).innerText = `Wrong Guess: ${incorrect_guess}`;
    document.getElementById("feedback").textContent = "Last Guess: Incorrect!";
    document.getElementById("feedback").classList.add("incorrect");
    if (incorrect_guess >= 3) {
      document.getElementById("new-game").innerText = `Play Again`;
      document.getElementById("score").innerText = `Score: ${score}`;
      document.getElementById(
        "feedback"
      ).textContent = `Incorrect guesses: 3. The correct word was: ${originalWord}`;
      document.getElementById("guessInput").value = "";
      document.getElementById("check-btn").classList.add("hide");
    }
  }
});

// Prevent website reloading when pressing Enter
const gameFormElememt = document.getElementById("gameForm");
gameFormElememt.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("check-btn").click();
});

// Function that handles game sounds
function playGameSound(type) {
  if (type === "correct") {
    audioCorrect.play();
  } else if (type === "incorrect") {
    audioIncorrect.play();
  } else if (type === "win") {
    audioWin.play();
  }
}
