const upload = require("../middleware/upload");
const energyServices = require("../service/energy.services");

//INSERT DATA
exports.create = (req, res, next) => {
    upload(req, res, function (err) {
        if (err) {
            next(err);
        } else {
            var model = {
                voltage : req.body.voltage,
                current : req.body.current,
                power : req.body.power,
                energy : req.body.energy,
                frequency : req.body.frequency,
                pf : req.body.pf,
            };

            energyServices.createEnergy(model, (error, results) => {
                if (error) {
                    return next(error);
                } else {
                    return res.status(200).send({
                        message: "Success",
                        data: results
                    });
                }
            });
        }
    });
};