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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin', 'staff', 'pasien'),
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: true // Kolom telephone, boleh null
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true // Kolom address, boleh null
    }
  }, {
    indexes: [
      { fields: ['role'] },
      { unique: true, fields: ['email'] }
    ]
  });

  // Relasi akan didefinisikan di index.js
  return User;
}; 