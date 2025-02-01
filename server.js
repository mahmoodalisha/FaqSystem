require("dotenv").config()
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const db = process.env.MONGO;
const path = require("path")
const faqRoutes = require("./routes/faqRoutes");
const app = express();


const mongoose = require("mongoose");

mongoose.connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        console.error('Error code:', err.code);
        console.error('Error message:', err.message);
    });


app.use(express.static(path.resolve(__dirname, 'frontend', 'build')))

app.get("/test",(req,res)=>{
    res.send("Express app is running")
})


app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/faqs", faqRoutes);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.get('*', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, 'frontend', 'build', 'index.html'),
        function (err) {
            if (err) {
                res.status(500).send(err)
            }
        }
    )
});



app.listen(8000, () => {
    //connect();
    console.log('Server is running on port 8000');
});
