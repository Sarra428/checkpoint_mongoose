const express = require ('express');
const app = express();
const connectDb = require('./routes/studentlist');
const studentlistRoute = require('./routes/studentlist')
app.use(express.json());
app.use('/api/studentlist', studentlistRoute)





connectDb();


app.listen(process.env.port, ()=> console.log(`port is running on ${process.env.port}`))