import db from "../models";
import userService from "../services/userService";

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

let handleGetAllUser = async (req, res) => {
    let id = req.query.id;
    let user = await userService.getAllUsers(id);

    // console.log(user);
    return res.status(200).json({
        errCode: 0,
        message: "Get user successful",
        user,
    });
};

let handleCreateUser = async (req, res) => {
    let message = await userService.createUser(req.body);
    // console.log(message);
    return res.status(200).json({
        message,
    });
};

let handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            message: "Missing id to Delete",
        });
    }
    let message = await userService.deleteUser(req.body.id);
    // console.log(message);
    return res.status(200).json(message);
};

let getAllCode = async (req, res) => {
    try {
        let message = await userService.getAllCodeService(req.query.type);
        return res.status(200).json(message)
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error From Server"
        })
    }
}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUser: handleGetAllUser,
    handleCreateUser: handleCreateUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
    getAllCode: getAllCode,
};