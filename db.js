
const mongoose = require("mongoose");

mongoose.set('strictQuery', false); 

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://rjrishav037:<mongocloud>@cluster37.kpsh1.mongodb.net/todos", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {todo}; 


//mongodb+srv://rjrishav037:<db_password>@cluster37.kpsh1.mongodb.net/