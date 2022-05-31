const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const games = [{ id: 0, type: 'minecraft' },
{ id: 1, type: 'anything' },
{ id: 2, type: '2k22' },
{ id: 3, type: 'darksouls' }];

app.get('/', (req, res) => {
  res.json(games);
});

app.get('/:id', (req, res) => {
  const item = games[req.params.id];
  res.json(item);
});

app.post('/', (req, res) => {
  console.log(req.body);
  const { id, type } = req.body;
  const game = {
    id: id,
    type: type
  };
  games.push(game);
  console.log(game);
  res.status(200).json(games);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});