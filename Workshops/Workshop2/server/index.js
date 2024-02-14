const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(cors({
  domains: '*',
  methods: "*"
}));



app.get('/paises', async (req, res) => {
  try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      res.json(data);
  } catch (error) {
      console.error('Error al obtener los países:', error);
      res.status(500).json({ error: 'Error al obtener los países' });
  }
});

app.listen(3001, () => console.log(`BBCR Exchange type service listening on port 3001!`));
