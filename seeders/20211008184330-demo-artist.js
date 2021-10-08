'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Artists', 
    [
      {
        artistName: 'Jerry Jeff Walker'
      },
      {
        artistName: 'Cat Stevens'
      },
      {
        artistName: 'Bread'
      },
      {
        artistName: 'Christian hymn (wds by John Newton)'
      },
      {
        artistName: 'Traditional'
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
