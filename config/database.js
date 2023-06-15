const chris = require("mongoose");

const db = "mongodb://0.0.0.0:27017/OSASELECTIONDATABASE";

const database = async () => {
  try {
    const dbcon = await chris.connect(db);
    console.log(" ");
    console.log(`OSAS DATA BASE IS CONNECTED TO : ${dbcon.Connection.host}`);
  } catch (error) {
    console.log("an error occured");
  }
};

module.exports = database();
