const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(
  () => console.log('MongoDB connected'),
  err => console.error(err)
);

const leadRoutes = require('./routes/leadRoutes');
app.use('/api/leads', leadRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
