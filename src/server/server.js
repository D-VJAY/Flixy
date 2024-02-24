const data =require('../Data/data.json')
const express = require('express');
const server = express();
const cors = require('cors');
const port = 5000;
// for using this file comment out 1st line and uncomment the following code
// then Establish the connection with DB,by creating your won db
//const mongoose = require('mongoose');
//const Product= require('./Productmodel')

server.use(cors({origin:'http://localhost:3000'}));

server.get('/data', async (req, res) => {
  try {

    console.log("route is proper")
    // Use the Product model to fetch data from the MongoDB collection
   // const data = await Product.find();
     console.log(data)
    // Send the data as a JSON response
    res.json(data);
  } catch (err) {
    console.error("Error fetching data: " + err);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

server.listen(port, () => {
  console.log('Server is listening on port ' + port );
});

