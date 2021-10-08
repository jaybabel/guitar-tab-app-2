'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tuning extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tuning.init({
    tuningName: DataTypes.STRING,
    tuningURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tuning',
  });
  return Tuning;
};