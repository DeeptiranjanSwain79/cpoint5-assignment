import axios from "axios";

export const baseURL = "http://localhost:5000/api/v1/";

const BackendAPI = axios.create({
    baseURL,
    withCredentials: true,
});

export default BackendAPI;