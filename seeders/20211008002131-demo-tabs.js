'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tabs', 
    [
      {
        tabTitle: 'Amazing Grace',
        tabURL: '/tabs/amazing-grace-gtm.pdf',
        tuning: '1',
        difficulty: 'Easy',
        artist: '',
        genre: '',
        tabSource: '',
        rating: '',
      },
      {
        tabTitle: 'Everything I Own',
        tabURL: '/tabs/everything_i_own_tab.pdf',
        tuning: '1',
        difficulty: '',
        artist: '',
        genre: '',
        tabSource: '',
        rating: '',
      },
      {
        tabTitle: 'Father and Son',
        tabURL: '/tabs/father_and_son_tab.pdf',
        tuning: '1',
        difficulty: '',
        artist: '',
        genre: '',
        tabSource: '',
        rating: '',
      },
      {
        tabTitle: 'House of the Rising Sun',
        tabURL: '/tabs/house-of-the-rising-sun-gtm.pdf',
        tuning: '1',
        difficulty: 'Easy',
        artist: '',
        genre: '',
        tabSource: '',
        rating: '',
      },
      {
        tabTitle: 'Mr. Bojangles',
        tabURL: '/tabs/mr_bojangles_tab.pdf',
        tuning: '1',
        difficulty: '',
        artist: '',
        genre: '',
        tabSource: '',
        rating: '',
      },
      {
        tabTitle: 'Red River Valley',
        tabURL: '/tabs/red-river-valley-gtm.pdf',
        tuning: '1',
        difficulty: 'Easy',
        artist: '',
        genre: '',
        tabSource: '',
        rating: '',
      }
    ], 
    {});
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
