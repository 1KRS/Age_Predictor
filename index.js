import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/submit', async (req, res) => {
  const name = req.body.name
  try {
    const { data } = await axios.get(`https://api.agify.io?name=${name}`);
    res.render('index.ejs', { data: data });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(
    `Διακομιστής: Ενεργός στην πύλη ${port} --> http://localhost:${port}`
  );
});
