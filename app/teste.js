const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.status(201).json({ message: 'Tarefa adicionada com sucesso!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando na porta ${PORT}');
});
