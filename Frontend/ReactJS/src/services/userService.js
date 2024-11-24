import axios from "../axios";

let handleLoginAPI = (email, password) => {
    return axios.post(`/api/login`, { email, password });
};

const getAllUsers = (id) => {
    return axios.get(`/api/get-users?id=${id}`);
};

const createUser = (data) => {
    console.log("check data service", data);
    
    return axios.post(`/api/create-user`, data);
};

export { handleLoginAPI, getAllUsers, createUser };
