import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const getEmployerDashboard = async () => {
  const response = await api.get("/employer/dashboard");

  return response.data;
};

export default api;
