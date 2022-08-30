"use strict";
const { Sequelize } = require("sequelize");

const metadatas = (sequelize, Sequelize) => {
  const Metadata = sequelize.define("metadatas", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    choices: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    type: {
      type: Sequelize.STRING,
    },
  });
  Metadata.associate = function (models) {
    // associations can be defined here
    // MetaD.belongsTo(models.Ques, {
    //   foreignKey: {
    //     name: "qId",
    //     allowNull: false,
    //   },
    //   as: "MetaD",
    // });
  };
  return Metadata;
};
module.exports = metadatas;
