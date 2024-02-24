//const path = require('path');
//require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
//const password = process.env.DB_PASSWORD;
// Comment all the above code and Use your own db password and use it in the connection String
const Password ="AY9IozL7tcIpI7oh"
const mongoose = require("mongoose");
 main();

  async function main() {
   try {
    await  mongoose.connect(`mongodb+srv://Homelander:${password}@cluster0.w9arfj7.mongodb.net/ottdata?retryWrites=true&w=majority`, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       bufferCommands:true,
     });
     console.log("Connected to MongoDB");
   } catch (err) {
     console.error("Error connecting to MongoDB: " + err);
   }
 }

 // Mongoose schema
 const ProductSchema = new mongoose.Schema({
   title: String,
   imgsrc: String,
   vidsrc: String
  });
  
  // Define and export the model
  const projectdata = mongoose.model('projectdata', ProductSchema);
  module.exports = projectdata; 
  
  

