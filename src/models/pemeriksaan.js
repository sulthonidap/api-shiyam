// Model Pemeriksaan untuk menyimpan riwayat pemeriksaan pasien
module.exports = (sequelize, DataTypes) => {
  const Pemeriksaan = sequelize.define('Pemeriksaan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tanggal: {
      type: DataTypes.DATE, // Diubah dari DATEONLY ke DATE
      allowNull: false
    },
    skor: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    usia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lama_sakit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alamat: {
      type: DataTypes.STRING,
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