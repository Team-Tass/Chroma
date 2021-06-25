const mongoose = require('mongoose');

/**
 * Credentials referenced in .env file, user will need own cluster
 */
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

/**
 * Establish database connection
 */
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: process.env.DB_NAME
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

/**
 * Define schema for palette documents
 */  
const paletteSchema = new Schema({
  palette: Array,
  createdAt: { type: Date, default: Date.now }
});

/** 
 * Create model for document writes
 */
const Palette = mongoose.model('palettes', paletteSchema);

module.exports = Palette;