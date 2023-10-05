import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.blue("Game: Lets guess a number between 1 to 10 in 3 tries"));
let randomNumber = 7;
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "myGuessNumber",
        message: "Enter a number between 1 to 10",
    },
]);
console.log(answers);
if (answers.myGuessNumber === randomNumber) {
    console.log(chalk.yellow("You guessed it right"));
}
else {
    console.log(chalk.red("You guessed it wrong"));
}
