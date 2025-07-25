'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pemeriksaans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.DATE, // Diubah dari DATEONLY ke DATE
        allowNull: false
      },
      skor: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      usia: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      jenis_kelamin: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lama_sakit: {
        type: Sequelize.STRING,
        allowNull: true
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pasien_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex('Pemeriksaans', ['pasien_id']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pemeriksaans');
  }
}; 