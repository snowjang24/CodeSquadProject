//app.js
const Todos = require('./todos');

const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

const getSeperateCommandArray = (command) => {
    let commandArray = [];
    const regexpObj = /[^\$]+/g; 
	
    const firstCommand = command.match(regexpObj)[0];
    const secondCommand = command.match(regexpObj)[1];
    const thirdCommand = command.match(regexpObj)[2];

    commandArray = [firstCommand, secondCommand];

    if (thirdCommand) {
        commandArray.push(thirdCommand);
    }
    return commandArray;
};

const executeTodoMethod = (firstCommand, secondCommand, thirdCommand) => {
    Todos[firstCommand](secondCommand, thirdCommand);
};

rl.setPrompt('명령하세요: ');
rl.prompt();
rl.on('line', (userInput) => {
    switch(userInput.toLowerCase().trim()){
        case 'exit':
            rl.close();
            break;
        default:
            console.log(`당신의 명령어: ${userInput}`);
			const commandArr = getSeperateCommandArray(userInput);
			
            if (commandArr.length == 2) {
               executeTodoMethod(commandArr[0], commandArr[1]);
			} else {
            	executeTodoMethod(commandArr[0], commandArr[1], commandArr[2]);
            }
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log("프로그램을 종료합니다.");
    process.exit();
});