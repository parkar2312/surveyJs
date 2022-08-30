"use strict";
const { Sequelize } = require("sequelize");

const elements = (sequelize, Sequelize) => {
  const Feed = sequelize.define(
    "elements",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      form_id: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      // questions: {
      //   type: Sequelize.ARRAY(Sequelize.TEXT),
      // },
    },
    { underscored: true }
  );

  return Feed;
};
module.exports = elements;
