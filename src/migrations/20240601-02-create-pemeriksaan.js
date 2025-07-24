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
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      hasil: {
        type: Sequelize.STRING,
        allowNull: false
      },
      catatan: {
        type: Sequelize.TEXT,
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