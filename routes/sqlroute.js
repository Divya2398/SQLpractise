const router = require("express").Router();
const record = require("../models/sqlmodel");

//add data to db
router.post("/add-record", async (req, res) => {
  try {
    const records = req.body;
    const data = record.create(records);
    res.send("success");
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ status: "fail", message: error.message });
  }
});

//delete data
router.delete("/delete-data", async (req, res) => {
  try {
    const id = req.query.id;
    const dropdata = record.destroy({ where: { id: id } });
    return res.status(200).json({ status: "success" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ status: "fail", message: error.message });
  }
});

//get all data

router.get("/get-data", async (req, res) => {
  try {
    const data = await record.findAll();
    if (data !== null) {
      return res.status(200).json({
        status: "success",
        message: "datas are fetched",
        result: data,
      });
    } else {
      return res
        .status(400)
        .json({ status: "failure", message: "no data found" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ status: "fail", message: error.message });
  }
});

//get data using condition

router.get("/get-particular-data", async (req, res) => {
  try {
    const id = req.query.id;
    const data = await record.findOne({ where: { id: id } });
    if (data !== null) {
      return res.status(200).json({
        status: "success",
        message: "detail is fetched",
        result: data,
      });
    } else {
      return res
        .status(400)
        .json({ status: "failure", message: "no data found for this id" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ status: "failure", message: error.message });
  }
});

//update-data

router.put("/update-data", async (req, res) => {
  try {
    const id = req.query.id;
    const change = req.body.change;
    const updatedata = await record.update(change, { where: { id: id } });
    return res
      .status(200)
      .json({ status: "success", message: "data updated successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ status: "fail", message: error.message });
  }
});

module.exports = router;
