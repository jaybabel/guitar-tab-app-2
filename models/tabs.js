'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tab.init({
    tabTitle: DataTypes.STRING,
    tabURL: DataTypes.STRING,
    tuning: DataTypes.INTEGER,
    difficulty: DataTypes.STRING,
    artist: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    tabSource: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tab',
  });
  return Tab;
};