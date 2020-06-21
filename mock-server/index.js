const express = require('express');
const cors = require('cors');
const productRouter = require('./product.router');

const app = express();
app.use(cors());
app.use(express.json());

// products route handler
app.use('/products', productRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Mock server is running on port ${port}`));