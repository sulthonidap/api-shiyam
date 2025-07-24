// Model Pemeriksaan untuk menyimpan riwayat pemeriksaan pasien
module.exports = (sequelize, DataTypes) => {
  const Pemeriksaan = sequelize.define('Pemeriksaan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hasil: {
      type: DataTypes.STRING,
      allowNull: false
    },
    catatan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pasien_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE', // Jika pasien dihapus, riwayat ikut terhapus
      onUpdate: 'CASCADE',
    }
  }, {
    indexes: [
      { fields: ['pasien_id'] }
    ]
  });

  // Relasi akan didefinisikan di index.js
  return Pemeriksaan;
}; 