const express = require('express');
const router = express.Router();
const { User } = require('../models');

// GET /users?role=staff|pasien|admin - List user, bisa filter role
router.get('/', async (req, res) => {
  try {
    const where = {};
    if (req.query.role) where.role = req.query.role;
    const users = await User.findAll({ where });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /users - Tambah user baru
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /users/:id - Detail user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User tidak ditemukan' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /users/:id - Update user
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User tidak ditemukan' });
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /users/:id - Hapus user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User tidak ditemukan' });
    await user.destroy();
    res.json({ message: 'User dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 