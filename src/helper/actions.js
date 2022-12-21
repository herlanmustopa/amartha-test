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
    console.log("RESPONSE");
    console.log(response);

    const data = await response
    // .data.map((item, index) => ({
    //   ...item,
    //   id: item.uuid,
    // }));
    console.log("DATA");
    console.log(data);
    // return toCamelCase(data);
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getCity = async () => {
  try {
    let response = await ApiClient({
      method: 'GET',
      url: Endpoint.GET_AREA,
    });

    const dataCity = uniq(response.map((item) => item.city)).map(
      (i) => ({
        label: capitalize(i),
        value: i,
      })
    );

    return dataCity;
  } catch (e) {
    console.error(e);
    return { province: [], list: [] };
  }
};

export const getSize = async () => {
  try {
    let response = await ApiClient({
      method: 'GET',
      url: Endpoint.GET_SIZE,
    });

    return response;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const addData = async (params) => {
  try {
    let response = await ApiClient({
      method: 'POST',
      url: Endpoint.ADD_DATA,
      data: params,
    })

    return toCamelCase(response);
  } catch (e) {
    console.log(e);
    return [];
  }
};
