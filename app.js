const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const taskController = require('./controllers/taskController');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', taskController.showTasks);
app.get('/adicionar', (req, res) => res.render('addTask'));
app.post('/adicionar', taskController.addTask);
app.get('/remove/:id', taskController.removeTask);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));