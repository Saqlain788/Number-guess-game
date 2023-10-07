import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.blue("Game: Lets guess a number between 1 to 10 in 3 tries"));

let randomNumber = Math.floor(Math.random() * 10 + 1);
let UserGuess: number = randomNumber;
console.log(UserGuess);

interface AnswersType {
  myGuessNumber: number;
}
interface playAgainType {
  playagain: boolean;
}
let numTries: number = 3;
let play: boolean = true;
while (play) {
  while (numTries > 0) {
    const answers: AnswersType = await inquirer.prompt([
      {
        type: "number",
        name: "myGuessNumber",
        message: "Enter a number between 1 to 10",
      },
    ]);

    console.log(answers);

    if (answers.myGuessNumber === UserGuess) {
      console.log(chalk.yellow("Hurray! You guessed it right, Game Ends"));
      numTries = 0;
    } else {
      console.log(chalk.red("You guessed it wrong"));
      if (UserGuess > answers.myGuessNumber) {
        console.log("Think Higher ");
      } else {
        console.log("Think Lower ");
      }
      console.log(`you have ${numTries - 1} left`);
    }

    numTries--;
  }
  const playAgainAnswers: playAgainType = await inquirer.prompt([
    {
      type: "confirm",
      name: "playagain",
      message: "Do you want to play again",
    },
  ]);
  console.log("Play Again", playAgainAnswers);
  if (playAgainAnswers.playagain === true) {
    randomNumber = Math.floor(Math.random() * 10 + 1);
    UserGuess = randomNumber;

    numTries = 3;
  } else {
    play = false;
    console.log("Existing Game");
  }
}
