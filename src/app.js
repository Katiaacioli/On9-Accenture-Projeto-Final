const express = require("express")
const app = express()
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require ("mongoose")
mongoose.connect(`${process.env.DATABASE_URL}`,
{

    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const index = require("./routes/index")
const receita = require("./routes/receitaRoute")
const sessions = require("./routes/sessionRoute")





app.use(express.json());

app.use(function(req,res, next){
    res.header("Acess-Control-Allow-Origin", "*")
    res.header(
        "Acess-Control-Allow-Origin",
        "Origin,X-Requested-With, Content-Type, Accept "
    )
    next()
})

app.use("/", index)
app.use("/receita", receita)
app.use("/sessions", sessions)




module.exports = app
