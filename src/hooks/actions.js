import { anime } from "../helper/action-types";
import { apiClient } from "../helper/apiClient";

export default function useAction() {
    const getAnime = async (id) => {
        return (dispatch) => {
            apiClient.get(`/anime/${id}`)
                .then((response) => {
                    dispatch({
                        type: anime.GET_ALL_ANIME,
                        payload: response.data,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    return { getAnime };


}

