import { reject } from "lodash";
import db from "../models";
import emailService from "./emailService";
import { v4 as uuidv4 } from 'uuid'
require('dotenv').config();
import { raw } from "body-parser";

let buildUrlEmail = (doctorId, token) => {
    let url = `${process.env.URL_REACT}/verify-booking?token=${token}&doctorId=${doctorId}`
    return url
}

let postBookingAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("from service patient", data);
            if (!data.email || !data.doctorId || !data.timeType || !data.date || !data.fullName || !data.gender || !data.address) {
                resolve({
                    errCode: 1,
                    message: "Missing data input",
                });
            } else {

                let token = uuidv4()
                await emailService.sendEmail({
                    receiverEmail: data.email,
                    patientName: data.fullName,
                    time: data.timeString,
                    doctorName: data.doctorName,
                    language: data.language,
                    redirectLink: buildUrlEmail(data.doctorId, token),
                });

                let user = await db.User.findOrCreate({
                    where: { email: data.email, },
                    defaults: {
                        firstName: data.fullName,
                        email: data.email,
                        roleId: "R3",
                        gender: data.gender,
                        address: data.address,
                    }
                });
                if (user) {
                    let booking = await db.Booking.findOrCreate({
                        where: { patientId: user[0].id, },
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType,
                            token: token
                        }

                    })
                    resolve({
                        errCode: 0,
                        message: "Booking Appointment Successful!",
                        data: booking

                    })
                }


            }
        } catch (error) {
            console.log(error);
            reject({
                errCode: -1,
                message: "Error get extra detail",
            });
        }
    });
}

let postVerifyBookingAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (!data.token || !data.doctorId) {
                resolve({
                    errCode: -1,
                    message: "Missing parameters",
                })
            } else {
                let appointment = await db.Booking.findOne({
                    where: {
                        doctorId: data.doctorId,
                        token: data.token,
                        statusId: "S1",
                    },
                    raw: false
                })

                // console.log(appointment);

                if (appointment) {
                    appointment.statusId = "S2"
                    await appointment.save();

                    resolve({
                        errCode: 0,
                        message: "Update appointment successful!",
                    })
                } else {
                    resolve({
                        errCode: 2,
                        message: "Appointment has been activated or not exist!",
                    })
                }
            }

        } catch (error) {
            console.log(error);

            reject(error)
        }
    })
}
export default {
    postBookingAppointment,
    postVerifyBookingAppointment,
};
