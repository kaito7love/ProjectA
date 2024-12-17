import { where } from "sequelize";
import db from "../models";

let getTopDoctor = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctors = await db.User.findAll({
                limit: limit,
                where: { roleId: 'R2' },
                order: [['createdAt', 'DESC']],
                attributes: { exclude: ["password"] },
                include: [
                    { model: db.Allcode, as: 'positionData', attributes: ['value_en', 'value_vi'] },
                    { model: db.Allcode, as: 'genderData', attributes: ['value_en', 'value_vi'] },
                ],
                raw: true,
                nest: true,
            })

            resolve({
                errCode: 0,
                data: doctors
            })
        } catch (error) {
            reject(error)
        }
    })
}

export default { getTopDoctor }