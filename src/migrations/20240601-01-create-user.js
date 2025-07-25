'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true, // Diubah agar boleh null
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true // Diubah agar boleh null
      },
      role: {
        type: Sequelize.ENUM('admin', 'staff', 'pasien'),
        allowNull: false
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.addIndex('Users', ['role']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
}; 