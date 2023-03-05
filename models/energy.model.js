const mongoose = require("mongoose");

const energy = mongoose.model(
    "energy",
    mongoose.Schema({
        voltage: String,
        current: String,
        power: String,
        energy: String,
        frequency: String,
        pf: String,
    },
    {
        timestamps: true,
    }
    )
);

module.exports = {
    energy
}