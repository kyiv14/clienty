const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let clients = [];

app.post('/api/clients', (req, res) => {
  const client = req.body;
  if (!client.phone || !client.email || !client.key || !client.viber || !client.paydate) {
    return res.status(400).json({ message: 'Данные неполные' });
  }
  clients.push(client);
  res.status(201).json({ message: 'Сохранено' });
});

app.get('/api/clients', (req, res) => {
  res.json(clients);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));