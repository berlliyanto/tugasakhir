const mongoose = require("mongoose");

const oee = mongoose.model(
    "oee",
    mongoose.Schema({
        machine_id: Number,
        operationtime: Number,
        downtime: Number,
        runningtime: Number,
        flawless: Number,
        defect: Number,
        processed: Number,
        availability: Number,
        performance: Number,
        quality: Number,
        nilaioee: Number,
        hasiloee: Number,
        state: Boolean,
    },
    {
        timestamps: true,
    }
    )
);

module.exports = {
    oee
}