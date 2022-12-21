import { capitalize, uniq } from 'lodash';
import toCamelCase from '../utils/caseConverter';
import ApiClient from './apiClient';
import Endpoint from './endpoint';

export const getData = async (params) => {
  try {
    let response = await ApiClient({
      method: 'GET',
      url: '/anime',
      params,
    });
    const data = await response
    return data;
  } catch (e) {
    return [];
  }
};
// https://api.jikan.moe/v4/anime/{id}/full
export const getDataById = async (id) => {
  try {
    let response = await ApiClient({
      method: 'GET',
      url: `/anime/${id}/full`,
    });
    const data = await response
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

