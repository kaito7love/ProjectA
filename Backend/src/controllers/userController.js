import db from "../models";
import userService from "../services/UserService";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    console.log(req.body);

    if (!email || !password) {
        return res.status(500).json({
            errorCode: 1,
            message: "Wrong input!",
        });
    }
    let userData = await userService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {},
    });
};

module.exports = {
    handleLogin: handleLogin,
};
