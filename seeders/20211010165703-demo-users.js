'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
          await queryInterface.bulkInsert('Users', [{
            name: 'Jay Babel',
            userName: 'admin',
            password: 'password',
            isAdmin: true
          }
        ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
