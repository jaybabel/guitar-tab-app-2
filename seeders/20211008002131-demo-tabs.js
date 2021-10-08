'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tabs', 
    [
      {
        tabTitle: 'Amazing Grace',
        tabURL: '/tabs/amazing-grace-gtm.pdf',
        tuning: '1',
        difficulty: 'Easy',
        artist: '4',
        genre: '',
        tabSource: 'https://www.capotastomusic.com/guitar_pages/guitar_tablature.htm',
        rating: '',
      },
      {
        tabTitle: 'Everything I Own',
        tabURL: '/tabs/everything_i_own_tab.pdf',
        tuning: '1',
        difficulty: '',
        artist: '3',
        genre: '',
        tabSource: 'www.jerrysguitarbar.com',
        rating: '',
      },
      {
        tabTitle: 'Father and Son',
        tabURL: '/tabs/father_and_son_tab.pdf',
        tuning: '1',
        difficulty: '',
        artist: '2',
        genre: '',
        tabSource: 'www.jerrysguitarbar.com',
        rating: '',
      },
      {
        tabTitle: 'House of the Rising Sun',
        tabURL: '/tabs/house-of-the-rising-sun-gtm.pdf',
        tuning: '1',
        difficulty: 'Easy',
        artist: '5',
        genre: '',
        tabSource: 'https://www.capotastomusic.com/guitar_pages/guitar_tablature.htm',
        rating: '',
      },
      {
        tabTitle: 'Mr. Bojangles',
        tabURL: '/tabs/mr_bojangles_tab.pdf',
        tuning: '1',
        difficulty: '',
        artist: '1',
        genre: '',
        tabSource: 'www.jerrysguitarbar.com',
        rating: '',
      },
      {
        tabTitle: 'Red River Valley',
        tabURL: '/tabs/red-river-valley-gtm.pdf',
        tuning: '1',
        difficulty: 'Easy',
        artist: '5',
        genre: '',
        tabSource: 'https://www.capotastomusic.com/guitar_pages/guitar_tablature.htm',
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
