const chris = require("mongoose");
const userModel = require("../model/usermodel");

// get all user

const getalluser = async (req, res) => {
  try {
    const alluser = await userModel.find();
    res.status(200).json({
      message: "gotten all user",
      data: alluser,
    });
  } catch (error) {
    res.status(200).json({
      message: "couldn't get all user",
    });
  }
};

// create new candidate

const createnewcandidate = async (req, res) => {
  try {
    const { candiddate, party, state, position, gender } = req.body;
    const newcandidate = await userModel.create({
      candiddate,
      party,
      state,
      position,
      gender,
    });
    res.status(200).json({
      message: "create new candidate",
      data: newcandidate,
    });
  } catch (error) {
    res.status(404).json({
      message: "can't create new candidate",
    });
  }
};
