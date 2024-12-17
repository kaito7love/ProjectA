import doctorService from "../services/doctorService"


let getTopDoctor = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) {
        limit = '5';
    }
    
    try {
        let doctors = await doctorService.getTopDoctor(+limit);
        // console.log(doctors);

        return res.status(200).json(doctors)

    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMessage: " Err from Server"
        })
    }
}

export default { getTopDoctor }