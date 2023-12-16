const express = require('express');
const mongoose = require('./db/mongoose'); // Import the database connection
const taskRoutes = require('./routes/taskRoutes');
const config = require('./config/config');

const app = express();


app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// Use taskRoutes for all routes related to tasks
app.use('/api', taskRoutes);


const port = config.server.port;

app.listen(port, () => {
  console.log(`Node API app listening on port ${port}`);
});









































// const express = require('express')
// const mongoose = require('mongoose')


// const Task = require('./models/taskModel')

// const app = express()
// const port = 4000

// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.post('/task', async (req, res) => {
//   try {
//     const task = await Task.create(req.body)
//     res.status(200).json(task)
//   } catch (error) {
//     console.log(error.message)
//     res.status(500).json({ message: error.message })
//   }
// })



// mongoose
// .connect('mongodb://localhost:27017/node-api-todos')
// .then(() => {
//   console.log('MongoDB connected...')

//   app.listen(port, () => {
//     console.log(`Node API app listening on port ${port}`)
//   })


// }).catch((error) => {
//   console.log(error)
// })