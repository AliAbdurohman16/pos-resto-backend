const express = require('express');
const connectDB = require('./config/database');
const config = require('./config/config');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const cookieParser = require('cookie-parser');
const app = express();

const PORT = config.port;
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// Root Endpoint
app.get('/', (req, res) => {
  res.json({message: 'Hello from POS Server!'});
});

// Other Endpoints
app.use('/api/users', require('./routes/userRoute'));

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});