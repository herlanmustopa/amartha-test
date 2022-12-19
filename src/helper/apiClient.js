import axios from "axios";
const BASE_URL = "https://api.jikan.moe/v4"

export const apiClient = axios.create({
    baseURL: BASE_URL,
});
