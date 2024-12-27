import { reject } from "lodash"
import db from "../models";
require('dotenv').config();

let postSpecialtyDescription = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.specialty || !data.descriptionMarkdown || !data.descriptionHTML) {
                resolve({
                    errCode: 1,
                    message: "Missing parameters",
                })
            } else {

                let specialty = await db.Specialty.findOrCreate({
                    where: { name: data.specialty, },
                    defaults: {
                        descriptionMarkdown: data.descriptionMarkdown,
                        descriptionHTML: data.descriptionHTML,
                        description: data.description,
                        // image: data.image, // update later
                    }
                });

                resolve({
                    errCode: 0,
                    message: "OK",
                    data: specialty
                })
            }
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
}
let getAllSpecialty = () => {
    return new Promise(async (resolve, reject) => {
        try {

            let specialty = await db.Specialty.findAll();
            resolve({
                errCode: 0,
                message: "Get all specialty successful",
                data: specialty
            })
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
}

export default {
    postSpecialtyDescription,
    getAllSpecialty,
}