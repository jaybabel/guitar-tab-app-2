'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tunings', 
    [
      {
        tuningName: 'cgdgcd',
        tuningURL: '/images/cgdgcd_tuning.jpeg'
      },
      {
        tuningName: 'dadgad',
        tuningURL: '/images/dadgad_tuning.jpeg'
      },
      {
        tuningName: 'Double  Drop D tuning',
        tuningURL: '/images/double_drop_d_tuning.jpeg'
      },
      {
        tuningName: 'Drop B tuning',
        tuningURL: '/images/drop_b_tuning.jpeg'
      },
      {
        tuningName: 'Drop C tuning',
        tuningURL: '/images/drop_c_tuning.jpeg'
      },
      {
        tuningName: 'Drop D tuning',
        tuningURL: '/images/drop_d_tuning.jpeg'
      },
      {
        tuningName: 'eadgbd_tuning',
        tuningURL: '/images/eadgbd_tuning.jpeg'
      },
      {
        tuningName: 'Open A tuning',
        tuningURL: '/images/open_a_tuning.jpeg'
      },
      {
        tuningName: 'Open C tuning',
        tuningURL: '/images/open_c_tuning.jpeg'
      },
      {
        tuningName: 'Open Cmaj7 tuning',
        tuningURL: '/images/open_cmaj7_tuning.jpeg'
      },
      {
        tuningName: 'Open D tuning',
        tuningURL: '/images/open_d_tuning.jpeg'
      },
      {
        tuningName: 'Open Dm tuning',
        tuningURL: '/images/open_dm_tuning.jpeg'
      },
      {
        tuningName: 'Open E tuning',
        tuningURL: '/images/open_e_tuning.jpeg'
      },
      {
        tuningName: 'Open G tuning',
        tuningURL: '/images/open_g_tuning.jpeg'
      },
      {
        tuningName: 'Open Gm tuning',
        tuningURL: '/images/open_gm_tuning.jpeg'
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
