import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const getAllCodeService = (inputType) => {
  return axios.get(`/api/allCode?type=${inputType}`);
};

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};
const editUserService = (data) => {
  return axios.put(`/api/edit-user`, data);
};

const deleteUserService = (userId) => {
  return axios.delete(`/api/delete-user`, {
    data: {
      id: userId,
    },
  });
};

const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};
const getAllDoctor = () => {
  return axios.get(`/api/get-all-doctors`);
};

const saveDetailDoctorsService = (data) => {
  return axios.post("/api/save-info-doctor", data);
};

const getDetailDoctor = (inputId) => {
  return axios.get(`/api/get-detai-doctor-by-id?id=${inputId}`);
};

const getContentMarkdown = (inputId) => {
  return axios.get(`/api/get-content-markdown-doctor?id=${inputId}`);
};
export {
  handleLoginApi,
  getAllUsers,
  getAllCodeService,
  createNewUserService,
  deleteUserService,
  editUserService,
  getTopDoctorHomeService,
  getAllDoctor,
  saveDetailDoctorsService,
  getDetailDoctor,
  getContentMarkdown,
};
