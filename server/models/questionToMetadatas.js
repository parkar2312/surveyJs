"use strict";
const { Sequelize } = require("sequelize");

const questionToMetadatas = (sequelize, Sequelize) => {
  const Ques = sequelize.define(
    "questionToMetadatas",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      meta_id: {
        type: Sequelize.INTEGER,
      },
      ques_id: {
        type: Sequelize.INTEGER,
      },
    }

    // { underscored: true }
  );

  return Ques;
};
module.exports = questionToMetadatas;
