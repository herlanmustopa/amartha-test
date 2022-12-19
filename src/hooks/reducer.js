import { anime } from "../helper/action-types";

const initialState = {
    anime: [],
    animeDetail: {},
    loading: false,
    error: false,

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case anime.GET_ALL_ANIME:
            return {
                ...state,
                anime: action.payload,
                loading: false,
                error: false,
            };
        case anime.GET_ID_ANIME:
            return {
                ...state,
                animeDetail: action.payload,
                loading: false,
                error: false,
            };
        default:
            return state;
    }
}