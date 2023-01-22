const express = require("express");
const { Connection } = require("mongoose");
const app = express();
const db = require("./models");
const config = require('./config/db.config')

const route = require('./routes/user.routes')
route(app)
//require('./routes/user.routes')(app)

app.get("/", (req, res) => {
  res.send("This Route is Working");
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`The Server is Running at port ${PORT}`);
});

// database Connection

//db.mongoose.connect(`mongodb+srv://${config.username}:${config.password}@cluster0.11ipkex.mongodb.net/`,
db.mongoose.connect(`mongodb+srv://${config.username}:${config.password}@cluster0.symtdxi.mongodb.net/`,
{
      useUnifiedTopology: true,
      UseNewUrlParser:true,
      dbName: config.dbName
}).then(() => {
    console.log("Connection Successful")
}).catch(() => {
  console.log("Connection Failed")
  process.exit()
})