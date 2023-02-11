const express = require("express")
const cors = require("cors")
const app = express()
const db = require("./models")
const config = require("./config/db.config")
const userRoutes = require("./routes/user.routes")
const loginRoute = require("./routes/login.routes")
const feedbackRoute = require("./routes/feedback.routes")

const corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions))
app.use(express.json())

app.use(userRoutes)
app.use(loginRoute)
app.use(feedbackRoute)

// Atemptting connection to the database
db.mongoose.connect(`mongodb+srv://fslDataBase:fslDataBase@cluster0.symtdxi.mongodb.net/feedback?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    dbName: config.dbName
})
    .then(() => console.log("connection to the database was successful"))
    .catch((err) => console.log("connection to the database failed", err))
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})
