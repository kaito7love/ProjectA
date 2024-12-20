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
            console.log(error);

            reject(error)
        }
    })
}

let getAllDoctor = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctors = await db.User.findAll({
                where: { roleId: 'R2' },
                order: [['createdAt', 'DESC']],
                attributes: { exclude: ["password", "image"] },
                // include: [
                //     { model: db.Allcode, as: 'positionData', attributes: ['value_en', 'value_vi'] },
                //     { model: db.Allcode, as: 'genderData', attributes: ['value_en', 'value_vi'] },
                // ],
                raw: true,
                nest: true,
            })

            resolve({
                errCode: 0,
                data: doctors
            })
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
}
let postInfoDoctor = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log("from service",data);

            if (!data.doctorId || !data.contentHTML || !data.contentMarkdown) {
                resolve({
                    errCode: 1,
                    message:
                        "MIssing content is required for updating doctor information",
                });
            } else {
                let doctor = await db.Markdown.findOne({
                    where: { doctorId: data.doctorId },
                });

                if (doctor) {
                    // Nếu đã tồn tại, cập nhật thông tin
                    doctor = await db.Markdown.update({
                        contentHTML: data.contentHTML,
                        contentMarkdown: data.contentMarkdown,
                        description: data.description,
                    }, {
                        where: { doctorId: data.doctorId }  // Thêm điều kiện tìm kiếm bản ghi
                    });
                    resolve({
                        errCode: 0,
                        message: "Update markdown successful",
                        data: doctor
                    });

                } else {
                    // Nếu chưa tồn tại, tạo mới
                    doctor = await db.Markdown.create({
                        doctorId: data.doctorId,
                        contentHTML: data.contentHTML,
                        contentMarkdown: data.contentMarkdown,
                        description: data.description,
                    });
                    resolve({
                        errCode: 0,
                        message: "Create markdown successful",
                        data: doctor
                    });
                }

            }
        } catch (error) {
            console.log(error);
            reject({
                errCode: 1,
                message: "Error markdown",
            })
        }
    })
}
let getDetailDoctorById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("from service id", id);
            if (!id) {
                // console.log(error);
                reject({
                    errCode: 1,
                    message: "Missing Id",
                })
            } else {
                
                let data = await db.User.findOne({
                    where: { id: id },
                    attributes: { exclude: ["password"] },
                    include: [
                        { model: db.Markdown, attributes: ['contentHTML', 'contentMarkdown', 'description'] },
                        { model: db.Allcode, as: 'positionData', attributes: ['value_en', 'value_vi'] },
                    ],
                    raw: false,
                    // nest: true,
                })
                // console.log("from service", data);
                if (data) {
                    resolve({
                        errCode: 0,
                        message: "Get detail successful",
                        data: data
                    });
                } else {
                    reject({
                        errCode: 2,
                        message: "Doctor not found",
                        data: {}
                    });
                }
            }


        } catch (error) {
            console.log(error);
            reject({
                errCode: 1,
                message: "Error get detail",
            })
        }
    })
}
export default { getTopDoctor, getAllDoctor, postInfoDoctor, getDetailDoctorById }