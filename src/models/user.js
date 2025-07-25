// Model User untuk menyimpan data Admin, Staff, dan Pasien
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false // Tetap wajib diisi
    },
    role: {
      type: DataTypes.ENUM('admin', 'staff', 'pasien'), // ENUM lagi
      allowNull: false // Wajib diisi
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true // Tidak wajib
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true // Tidak wajib
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true // Tidak wajib
    }
  }, {
    indexes: [
      { fields: ['role'] }
    ]
  });

  // Relasi akan didefinisikan di index.js
  return User;
}; 