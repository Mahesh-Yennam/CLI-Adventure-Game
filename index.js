import { createInterface } from 'node:readline/promises';
import chalk from 'chalk';
import boxen from 'boxen';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const name = await rl.question(chalk.blue('Enter you name: '));
console.log(chalk.green('Hello', name, 'Wellcome to My Game!'));

const play = await rl.question(chalk.blue('Do you want to play? (yes/no): '));

if (!['yes', 'y'].includes(play.toLowerCase())) {
    console.log(chalk.yellow('Maybe next time! Goodbye!'));
} else {
    console.log(chalk.green("Great! Let's start the game."));

    let score = 0;

    const questions = [
        {
            question: 'What is the capital of India? ',
            answer: 'New Delhi',
        },
        {
            question: 'What is 257 + 472? ',
            answer: '729',
        },
        {
            question: 'What is the largest planet in our solar system? ',
            answer: 'jupiter',
        },
    ];
    for (let i = 0; i < questions.length; i++) {
        const userAnswer = await rl.question(chalk.blue(questions[i].question));
        if (userAnswer.toLowerCase().trim() === questions[i].answer.toLowerCase()) {
            console.log(chalk.green('Correct!'));
            score++;
        } else {
            console.log(chalk.red('Wrong! The correct answer is:'), chalk.green(questions[i].answer));
        }
    }

    console.log(chalk.yellow('Game Over! Your final score is:'));

    console.log(boxen(`${score} out of ${questions.length}`, { padding: 1, borderColor: 'green', dimBorder: true }));
}

rl.close();
