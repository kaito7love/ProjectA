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
};

const getAllDoctorService = () => {
    return axios.get("/api/get-all-doctors");
};

const saveInfoDoctorService = (data) => {
    return axios.post(`/api/post-info-doctor`, data);
};

const getDetailDoctorService = (id) => {
    return axios.get(`/api/get-detail-doctors?id=${id}`);
};

const saveBulkScheduleDoctor = (data) => {
    return axios.post(`/api/bulk-create-schedule`, data);
};
export {
    handleLoginAPI,
    getAllUsers,
    createUserService,
    deleteUserService,
    editUserService,
    getAllCodeService,
    getTopDoctorService,
    getAllDoctorService,
    saveInfoDoctorService,
    getDetailDoctorService,
    saveBulkScheduleDoctor,
};
