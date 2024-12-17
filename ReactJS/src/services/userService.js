import axios from "../axios";

let handleLoginAPI = (email, password) => {
    return axios.post(`/api/login`, { email, password });
};

const getAllUsers = (id) => {
    return axios.get(`/api/get-users?id=${id}`);
};

const createUserService = (data) => {
    return axios.post(`/api/create-user`, data);
};

const deleteUserService = (id) => {
    return axios.delete("/api/delete-user", { data: { id: id } });
};

const editUserService = (data) => {
    return axios.put("/api/edit-user", data);
};

const getAllCodeService = (type) => {
    return axios.get(`/api/allcode?type=${type}`);
};

const getTopDoctorService = (limit) => {
    return axios.get(`/api/doctor-home?limit=${limit}`);
}

export { handleLoginAPI, getAllUsers, createUserService, deleteUserService, editUserService, getAllCodeService, getTopDoctorService };
