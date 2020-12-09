const express = require("express");
const paymentrouter = require("./../razorbackend/routes/payments");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json({ extended: false }));
app.use('/payment',paymentrouter);

app.listen(port, () => console.log(`server started on port ${port}`));