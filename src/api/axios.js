import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getEmployerDashboard = async () => {
  const response = await api.get("/employer/dashboard");

  return response.data;
};

export const getEmployerJobs = async () => {
  const response = await api.get("/employer/jobs");

  return response.data;
};

export const getEmployerApplicants = async () => {
  const response = await api.get("/employer/applicants");
  return response.data;
};

export default api;
