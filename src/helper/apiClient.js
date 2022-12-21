import axios from "axios";
const BASE_URL = "https://api.jikan.moe/v4"

export const client = axios.create({
    baseURL: BASE_URL,
});

const ApiCLient = async (options) => {
    const onSuccess = function (response) {

        // console.debug("ApiCLient Successful!", response);
        return response.data
    }

    const onError = function (error) {

        if (error.response) {
            // ApiCLient was made but server responded with something
            // other than 2xx
            // console.error("Status:", error.response.status);
            // console.error("Data:", error.response.data);
            // console.error("Headers:", error.response.headers);
        } else {
            // Something else happened while setting up the ApiCLient
            // triggered the error
            // console.error("Error Message:", error.message);
        }

        // return error.message;
        return Promise.reject(error.response || error.message)
    }

    return client(options).then(onSuccess).catch(onError)
}

export default ApiCLient