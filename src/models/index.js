const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

// Inisialisasi Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Import semua model
fs.readdirSync(__dirname)
  .filter(file => file !== basename && file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Definisikan relasi antar model
const { User, Pemeriksaan, StaffPasien } = db;

// Relasi many-to-many antara Staff dan Pasien
User.belongsToMany(User, {
  as: 'Pasien',
  through: StaffPasien,
  foreignKey: 'staff_id',
  otherKey: 'pasien_id'
});
User.belongsToMany(User, {
  as: 'Staff',
  through: StaffPasien,
  foreignKey: 'pasien_id',
  otherKey: 'staff_id'
});

// Relasi satu pasien memiliki banyak pemeriksaan
User.hasMany(Pemeriksaan, { foreignKey: 'pasien_id', as: 'pemeriksaans' });
Pemeriksaan.belongsTo(User, { foreignKey: 'pasien_id', as: 'pasien' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; 