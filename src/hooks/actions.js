import { anime } from "../helper/action-types";
// import { apiClient } from "../helper/apiClient";

// export default function useAction() {
export const getAnime = async (id) => {
    return (dispatch) => {
        const path = '/anime/';

        // return apiClient.get(path + `${id}`)
        //     .then((response) => {
        //         dispatch({
        //             type: anime.GET_ALL_ANIME,
        //             payload: response.data,
        //         });
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }
}


// export const getBrizziJumlahPartner = () => {
//     return (dispatch) => {
//         const path = "/mis-dashboard/pencapaian/brizzi/jumlah-partner";
//         const timestamp = new Date().toISOString();
//         const signatureKey = generateSignature(path, "GET", "", timestamp);
//         dispatch({
//             type: modul_pencapaian.FETCH_DATA_MODUL_PENCAPAIAN,
//         });
//         return DUMMYMIS.get(path)
//             .then((res) => {
//                 dispatch({
//                     type: modul_pencapaian.GET_BRIZZI_JUMLAH_PARTNER,
//                     payload: res.data.data,
//                 });
//                 return res.data;
//             })
//             .catch((err) => {
//                 console.log(err);
//                 dispatch({
//                     type: modul_pencapaian.REFRESH_MODUL_PENCAPAIAN,
//                 });
//                 return false;
//             });
//     };
// };