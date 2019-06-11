const argv = require('./config/yargs').argv;
const task = require('./ToDo/todo')
const colors = require('colors')
let command = argv._[0]
//console.log(argv);
let newTask = '',  taskList = []
task.read()

switch(command) {

    case 'add':
        console.log('Creating a new task');
        newTask = task.create(argv.description);
        console.log(newTask);
        break;

    case 'show':
        taskList = task.getList()
        console.log('============TASK LIST============'.green);

        for (let toDo of taskList) {
            console.log(`Task : ${toDo.description}`);
            console.log(`is it done? : ${toDo.complete}`)
            console.log('================================='.green);
        }
        break;

    case 'update':
        console.log('Updating a task... \n');
        newTask = task.update(argv.description, argv.complete)

        if(!newTask){
            newTask = 'Your task could not be found'.red
        }else{
            newTask = `Task : ${newTask.description} \nis it done? : ${newTask.complete}`.green;
        }
        console.log(newTask)
        break;

    case 'delete':
        taskList = task.deleteTask(argv.description)
        if(!taskList){
            console.log('Your task could not be found'.red);
        }else{
            taskList = task.getList()
            console.log('============TASK LIST============'.green);
    
            for (let toDo of taskList) {
                console.log(`Task : ${toDo.description}`);
                console.log(`is it done? : ${toDo.complete}`)
                console.log('================================='.green);
            }  
        }
        
        break;

    default: 
        console.log('Command not recognized');
}
