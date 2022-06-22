const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.post("/user", async (req, res) => {
  try {
    const json = await User.create(req.body);

    function flattenObject(ob) {
      var toReturn = {};
      var flatObject;
      for (var i in ob) {
        if (!ob.hasOwnProperty(i)) {
          continue;
        }
        if (typeof ob[i] === "object") {
          flatObject = flattenObject(ob[i]);
          for (var x in flatObject) {
            if (!flatObject.hasOwnProperty(x)) {
              continue;
            }
            toReturn[x] = flatObject[x];
          }
        } else {
          toReturn[i] = ob[i];
        }
      }
      return toReturn;
    }
    const data = flattenObject(json);

    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/user", async (req, res) => {
  try {
    const data = await User.find().lean().exec();

    const flattenJSON = (obj = {}, res = {}, extraKey = "") => {
      for (let key in obj) {
        if (typeof obj[key] !== "object" && typeof obj[key] !== "function") {
          res[extraKey + key] = typeof obj[key];
        } else {
          if (key === "_id") {
            res[extraKey + key] = "number";
          }
          flattenJSON(obj[key], res, `${extraKey}${key}.`);
        }
      }
      return res;
    };

    const result = flattenJSON(data);

    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
