const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: process.env.DB_NAME
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;
  
const paletteSchema = new Schema({
  createdAt: { type: Date, default: Date.now }
});
const Palette = mongoose.model('palettes', paletteSchema);

module.exports = Palette;