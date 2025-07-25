require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors'); // Tambahkan import cors
const morgan = require('morgan'); // Tambahkan ini

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());
app.use(cors()); // Aktifkan CORS untuk semua origin
app.use(morgan('dev')); // Tambahkan ini sebelum middleware lain

// Routing utama
app.use('/api', routes);

// Error handler sederhana
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
}); 