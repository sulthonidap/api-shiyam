// Model StaffPasien sebagai tabel relasi many-to-many antara Staff dan Pasien
module.exports = (sequelize, DataTypes) => {
  const StaffPasien = sequelize.define('StaffPasien', {
    staff_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      index: true
    },
    pasien_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      index: true
    }
  }, {
    indexes: [
      { fields: ['staff_id'] },
      { fields: ['pasien_id'] }
    ]
  });

  // Relasi akan didefinisikan di index.js
  return StaffPasien;
}; 