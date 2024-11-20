import { raw } from "body-parser";
import db from "../models";
import bcrypt from "bcrypt";

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let isExist = await checkUserEmail(email);
            let userData = {};
            if (isExist) {
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes:  ["email", "roleId" ,'password'] ,
                    raw: true
                });
                if (user) {
                    let check = await bcrypt.compareSync(password,user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = `Ok`;
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = '3';
                        userData.errMessage = `Password incorrect`;
                        resolve(userData);
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User not exist`;
                    resolve(userData);
                }
            } else {
                userData.errCode = `1`;
                userData.errMessage = `Email incorrect`;
                resolve(userData);
            }
            resolve(userData)
        } catch (error) {
            reject(error);
        }
    });
};
let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail },
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    handleUserLogin: handleUserLogin,
};
