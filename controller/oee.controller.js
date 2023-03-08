const oeeService = require('../service/oee.services');

// CREATE OEE
exports.createOEE = (req, res, next) => {
    oeeService.createOEE(req.body, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success Add OEE",
            data: result,
        });
    });
};

//READ DATA TERBARU
exports.newOEEM1 = (req, res, next) => {
    var model = {
        machine_id: req.params.machine_id,
    }
    oeeService.latestOEEM1(model,(error, results)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Success",
                data: results,
            })
        }
    })
}