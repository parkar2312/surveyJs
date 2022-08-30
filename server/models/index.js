// import * as pg from "pg";
const pg = require("pg");
const Sequelize = require("sequelize");
const metadatas = require("./metadatas");
const pannels = require("./pannels");
const questions = require("./questions");
const forms = require("./forms");
const elementToQuestions = require("./elementToQuestions");
const questionToMetadatas = require("./questionToMetadatas");

const sequelize = new Sequelize("survey", "postgres", "parimal", {
  host: "localhost",
  dialect: "postgres",
  operatorAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectModule: pg,
  define: {
    timestamps: false,
  },
});

const db = {};

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//...

db.Feeds = pannels(sequelize, Sequelize);
db.Questions = questions(sequelize, Sequelize);
db.Forms = forms(sequelize, Sequelize);
db.Metadata = metadatas(sequelize, Sequelize);
db.ElementToQuestion = elementToQuestions(sequelize, Sequelize);
db.QuestionToMetadata = questionToMetadatas(sequelize, Sequelize);
// db.Questions.associate = function (models) {
//   // associations can be defined here

db.Feeds.belongsTo(db.Forms, {
  foreignKey: {
    name: "form_id",
    allowNull: false,
  },
});

db.Forms.hasMany(db.Feeds, {
  foreignKey: {
    name: "form_id",
    allowNull: false,
  },
});
// db.Feeds.associate = function (models) {
// associations can be defined here

// db.Questions.belongsTo(db.Feeds, {
//   foreignKey: {
//     name: "pannel_id",
//     allowNull: false,
//   },
// });

// db.Feeds.hasMany(db.Questions, {
//   foreignKey: {
//     name: "pannel_id",
//     allowNull: false,
//   },
// });

// db.Metadata.belongsTo(db.Questions, {
//   foreignKey: {
//     name: "q_id",
//     allowNull: false,
//   },
// });

// db.Questions.hasMany(db.Metadata, {
//   foreignKey: {
//     name: "q_id",
//     allowNull: false,
//   },
// });

db.ElementToQuestion.belongsTo(db.Feeds, {
  foreignKey: {
    name: "pannel_id",
    allowNull: false,
  },
  // as: "elements",
});

db.Feeds.hasMany(db.ElementToQuestion, {
  foreignKey: {
    name: "pannel_id",
    allowNull: false,
  },
  // as: "elements",
});

db.ElementToQuestion.belongsTo(db.Questions, {
  foreignKey: {
    name: "q_id",
    allowNull: false,
  },
  as: "elements",
});

db.Questions.hasMany(db.ElementToQuestion, {
  foreignKey: {
    name: "q_id",
    allowNull: false,
  },
  as: "elements",
});

db.QuestionToMetadata.belongsTo(db.Metadata, {
  foreignKey: {
    name: "meta_id",
    allowNull: false,
  },
});

db.Metadata.hasMany(db.QuestionToMetadata, {
  foreignKey: {
    name: "meta_id",
    allowNull: false,
  },
});

db.QuestionToMetadata.belongsTo(db.Questions, {
  foreignKey: {
    name: "ques_id",
    allowNull: false,
  },
});

db.Questions.hasMany(db.QuestionToMetadata, {
  foreignKey: {
    name: "ques_id",
    allowNull: false,
  },
});
// };

// db.Users = dataModel(sequelize, Sequelize);

module.exports = db;
