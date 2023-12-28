const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Painting = require('./models/painting');
const dotenv = require('dotenv'); 

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
  console.log('Connected to MongoDB');
})
  .catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


function validatePaintingInput(req, res, next) {
  const { name, category, price } = req.body;

  if (!name || !category || !price || isNaN(price)) {
    return res.status(400).send('Name, category, and valid price are required.');
  }

  next();
}


app.get('/', async (req, res) => {
  try {
    const paintings = await Painting.find();
    res.render('index', { paintings });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


app.post('/paintings', validatePaintingInput, async (req, res) => {
  const { name, category, price } = req.body;
  try {
    const newPainting = new Painting({ name, category, price });
    await newPainting.save();
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


app.get('/paintings/:id/edit', async (req, res) => {
  const paintingId = req.params.id;
  try {
    const painting = await Painting.findById(paintingId);
    if (!painting) {
      return res.status(404).send('Painting not found.');
    }
    res.render('edit', { painting });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});



app.post('/paintings/:id', validatePaintingInput, async (req, res) => {
  const paintingId = req.params.id;
  try {
    const paintingToUpdate = await Painting.findById(paintingId);
    if (!paintingToUpdate) {
      return res.status(404).send('Painting not found.');
    }

    paintingToUpdate.name = req.body.name;
    paintingToUpdate.category = req.body.category;
    paintingToUpdate.price = req.body.price;

    await paintingToUpdate.save();

    res.redirect('/');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


app.post('/paintings/:id/delete', async (req, res) => {
  const paintingId = req.params.id;
  try {
    await Painting.findByIdAndDelete(paintingId);
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
