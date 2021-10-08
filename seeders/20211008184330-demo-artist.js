'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('artist', 
    [
      {
        name: 'Jerry Jeff Walker'
      },
      {
        name: 'Cat Stevens'
      },
      {
        name: 'Bread'
      },
      {
        name: 'Christian hymn (wds by John Newton)'
      },
      {
        name: 'Traditional'
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
