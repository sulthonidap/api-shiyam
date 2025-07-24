const express = require('express');
const router = express.Router();
const { User, StaffPasien } = require('../models');

// GET /staff/:id/pasien - Daftar pasien milik staff tertentu
router.get('/:id/pasien', async (req, res) => {
  try {
    const staff = await User.findByPk(req.params.id);
    if (!staff || staff.role !== 'staff') return res.status(404).json({ error: 'Staff tidak ditemukan' });
    const pasien = await staff.getPasien();
    res.json(pasien);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /staff/:id/pasien - Tambah pasien ke staff
router.post('/:id/pasien', async (req, res) => {
  try {
    const staff = await User.findByPk(req.params.id);
    if (!staff || staff.role !== 'staff') return res.status(404).json({ error: 'Staff tidak ditemukan' });
    const pasien = await User.findByPk(req.body.pasien_id);
    if (!pasien || pasien.role !== 'pasien') return res.status(404).json({ error: 'Pasien tidak ditemukan' });
    await staff.addPasien(pasien);
    res.json({ message: 'Pasien ditambahkan ke staff' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /staff/:id/pasien/:pasien_id - Hapus pasien dari staff
router.delete('/:id/pasien/:pasien_id', async (req, res) => {
  try {
    const staff = await User.findByPk(req.params.id);
    if (!staff || staff.role !== 'staff') return res.status(404).json({ error: 'Staff tidak ditemukan' });
    const pasien = await User.findByPk(req.params.pasien_id);
    if (!pasien || pasien.role !== 'pasien') return res.status(404).json({ error: 'Pasien tidak ditemukan' });
    await staff.removePasien(pasien);
    res.json({ message: 'Pasien dihapus dari staff' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router; 