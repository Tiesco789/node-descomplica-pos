import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type: "input",
            name: "nome",
            message: "Qual o seu nome?",
        },
        {
            type: "list",
            name: "idade",
            message: "Qual a sua idade?",
            choices: ["29 a 30", "40 a 50", "50+"],
        },
    ])
    .then((answers) => {
        console.log(`Oi ${answers.nome} com ${answers.idade} de vida`);
    });
