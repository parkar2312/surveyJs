"use strict";
const { Sequelize } = require("sequelize");

const questions = (sequelize, Sequelize) => {
  const Ques = sequelize.define(
    "questions",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      // pannel_id: {
      //   type: Sequelize.INTEGER,
      // },
      startWithNewLine: {
        type: Sequelize.BOOLEAN,
      },
    }

    // { underscored: true }
  );

  return Ques;
};
module.exports = questions;
