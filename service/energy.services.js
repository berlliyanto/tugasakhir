const { energy } = require("../models/energy.model");

// CREATE DATA
async function createEnergy(params, callback) {
    if (!params) {
        return callback({
            message: "energy Required",
        }),
            ""
    };

    const ParamModel = energy(params);
    ParamModel
        .save()
        .then((response) => {
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
};

module.exports = {
    createEnergy
}