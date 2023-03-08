const {oee} = require('../models/oee.model');

// CREATE DATA
async function createOEE(params, callback) {
    if (!params) {
        return callback({
            message: "parameter Required",
        }),
            ""
    };
    const oeeModel = oee(params);
    oeeModel
        .save()
        .then((response) => {
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
};

//READ DATA TERBARU 
async function latestOEEM1(params, callback) {
    oee.find({machine_id: 1}).sort({ _id: -1 }).limit(1).then((response) => {
        if (!response) callback("No Data");
        else return callback(null, response);
    }).catch((error) => {
        return callback(error);
    });
}

module.exports = {
    createOEE,
    latestOEEM1
}