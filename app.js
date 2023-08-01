const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./db/connect');
const products_routes = require("./routes/products");
const bosch_routes = require("./routes/bosch");
const forte_routes = require("./routes/forte");
const sandhu_routes = require("./routes/sandhu");
const dura_routes = require("./routes/dura");
const heapro_routes = require("./routes/heapro");
const ralli_routes = require("./routes/ralli");
const star_routes = require("./routes/star");
const warpp_routes = require("./routes/warpp");
const machines_routes = require("./routes/machines");
const email_routes = require("./routes/sendEmail");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hi, I am live");
});

//middleware or to set router
// app.use(express.limit(100000000));
// app.use(bodyParser.lib.type.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb',parameterLimit: 100000, extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use("/api/products",products_routes);
app.use("/api/bosch",bosch_routes);
app.use("/api/forte",forte_routes);
app.use("/api/sandhu",sandhu_routes);
app.use("/api/dura",dura_routes);
app.use("/api/heapro",heapro_routes);
app.use("/api/star",star_routes);
app.use("/api/ralli",ralli_routes);
app.use("/api/warpp",warpp_routes);
app.use("/api/machines",machines_routes);
app.use("/api/email",email_routes);

const start = async () =>{
    try {
        await connectDB();
        app.listen(PORT, ()=>{
           console.log(`${PORT} Yes I am connected`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();