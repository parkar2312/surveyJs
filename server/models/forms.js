"use strict";
const { Sequelize } = require("sequelize");

const forms = (sequelize, Sequelize) => {
  const Forms = sequelize.define(
    "forms",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.INTEGER,
      },
    },
    { underscored: true }
  );

  return Forms;
};
module.exports = forms;
