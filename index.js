const fs = require('fs');
const path = require('path');

const datafile = path.join(process.cwd(), 'tasks.json');

function loadTasks() {
    if(fs.existsSync(datafile)){
        const data = fs.readFileSync(datafile , 'utf-8');
        return JSON.parse(data);
    }
    return [];
}

function saveTasks(tasks) {
    fs.writeFileSync(datafile , JSON.stringify(tasks , null , 2), 'utf-8');
}

function addTask(description) {
    const tasks = loadTasks();
    const newTask = {id : tasks.length + 1 , description , completed : false} ;
    tasks.push(newTask);
    saveTasks(tasks);
    console.log('task added ' , newTask)
}

function completeTask(id){
    const tasks = loadTasks();
    const task = tasks.find(task => task.id === id)
    if(task){
        task.completed = true;
        saveTasks(tasks);
        console.log('Task Completed' , task);
    } else {
        console.log('task not found');
    }
}

addTask("sex is nice")
addTask("even nicer with your gf");
loadTasks();
completeTask(1);
loadTasks();



