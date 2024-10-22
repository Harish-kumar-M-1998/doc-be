const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');



const app = express();
const corsOptions = {
  origin: 'https://rps-fe.netlify.app', // Allow your Netlify frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  credentials: true, // Allow credentials (if needed)
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect("mongodb+srv://harishmano98:Harish%402024@harish-mongo.uf15eex.mongodb.net/doctor", )
.then(() => console.log('MongoDB connected'))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
