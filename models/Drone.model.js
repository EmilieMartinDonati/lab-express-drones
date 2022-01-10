// Iteration #1

const {Schema, model} = require("mongoose");

const droneSchema = new Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number,
})

const drone = model("drones", droneSchema);

module.exports = drone;