let tasks = [];

function addTask({ description }) {
    tasks.push({ id: String(Math.random()), description });
    console.log(tasks);
}

function getTasks() {
    return tasks;
}

function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

module.exports = {
    addTask,
    getTasks,
    removeTask
};