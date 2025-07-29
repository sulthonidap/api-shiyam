const express = require('express');
const router = express.Router();
const { Pemeriksaan, User } = require('../models');

// GET /pemeriksaan?pasien_id= - List riwayat pemeriksaan pasien tertentu
router.get('/', async (req, res) => {
  try {
    const where = {};
    if (req.query.pasien_id) where.pasien_id = req.query.pasien_id;
    const pemeriksaans = await Pemeriksaan.findAll({
      where,
      include: [{ model: User, as: 'pasien', attributes: ['id', 'name', 'email'] }],
      order: [['tanggal', 'DESC']]
    });
    res.json(pemeriksaans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /pemeriksaan - Tambah pemeriksaan baru
router.post('/', async (req, res) => {
  try {
    const pemeriksaan = await Pemeriksaan.create(req.body);
    res.status(201).json(pemeriksaan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /pemeriksaan/:id - Hapus pemeriksaan berdasarkan ID
router.delete('/:id', async (req, res) => {
  try {
    const pemeriksaan = await Pemeriksaan.findByPk(req.params.id);
    if (!pemeriksaan) {
      return res.status(404).json({ error: 'Pemeriksaan tidak ditemukan' });
    }
    await pemeriksaan.destroy();
    res.json({ message: 'Pemeriksaan berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 