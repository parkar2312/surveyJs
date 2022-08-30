"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    "questions", // name of Source model
      "pannel_id", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: "pannels", // name of Target model
          key: "pannel_id", // key in Target model that we're referencing
        },
        onDelete: "SET NULL",
      };
  },

  async down(queryInterface, Sequelize) {
    "questions", // name of Source model
      "pannel_id"; // key we want to remove
  },
};
