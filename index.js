import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
//import {postRoute} from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

//s

const CONNECTION_URL =
  'mongodb+srv://Balachandar:Balachandar1@cluster0.9e9govo.mongodb.net/test';

const PORT = process.env.PORT || 5001;

//mongoose.connect(CONNECTION_URL).then(()=>{console.log('Server Running on Port: http://localhost:&{PORT}')})

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);
//mongoose.set('strictQuery', true);

//mongoose.set('useFindAndModify', false);

// https://www.mongodb.com/cloud/atlas
