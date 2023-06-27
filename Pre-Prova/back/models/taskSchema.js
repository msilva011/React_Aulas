const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    note:{
        type: String,
        required: true,
        unique: true 
    }
});

const tasks = new mongoose.model("tasks",taskSchema);

module.exports = tasks;