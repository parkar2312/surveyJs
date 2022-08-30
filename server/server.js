const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

const db = require("./models/index");
db.sequelize.sync();
const Feed = db.Feeds;
const Forms = db.Forms;
const ElementToQuestion = db.ElementToQuestion;
const Questions = db.Questions;

app.get("/posts", async (req, res) => {
  {
    try {
      const pages = await Forms.findAll({
        where: {
          id: 1,
        },
        include: [
          {
            all: true,
            nested: true,
          },
        ],
      });
      res.status(200).json({ pages });
      console.log("All users:", JSON.stringify(pages, null, 2));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
});

app.get("/postsnew", async (req, res) => {
  {
    try {
      const pages = await Forms.findAll({
        include: [
          {
            model: Feed,
            include: [
              {
                model: ElementToQuestion,

                include: [{ model: Questions, as: "elements" }],
              },
            ],
          },
        ],
      });
      res.status(200).json({ pages });
      console.log("All users:", JSON.stringify(pages, null, 2));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
});
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
