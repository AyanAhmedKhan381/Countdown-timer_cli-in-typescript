#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
console.log(chalk.red("=".repeat(70)));
console.log(chalk.yellow("  (っ◔◡◔)っ 💘♟ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞_𝐓𝐨_𝐂𝐨𝐝𝐞_𝐖𝐢𝐭𝐡_𝐀𝐲𝐚𝐧  ♢💙 (っ◔◡◔)っ"));
console.log(chalk.red("=".repeat(70)));
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: chalk.bold.yellow("Please Enter the amount of Seconds"),
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter valid number";
        }
        else if (input > 60) {
            return "Start Only 60 seconds Coundown Timer";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTimen = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTimen, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
