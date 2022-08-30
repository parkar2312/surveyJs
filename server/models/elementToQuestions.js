"use strict";
const { Sequelize } = require("sequelize");

const elementToQuestions = (sequelize, Sequelize) => {
  const Ques = sequelize.define(
    "elementToQuestions",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      q_id: {
        type: Sequelize.INTEGER,
      },
      pannel_id: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
    }
    // { underscored: true }
  );

  return Ques;
};
module.exports = elementToQuestions;
