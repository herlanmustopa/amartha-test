import { useState } from 'react';
import { getCity } from '../helpers/actions';

const useGetCity = () => {
  const [cities, setCities] = useState([]);

  const fetchGetCities = async () => {
    try {
      const response = await getCity();
      if (response) {
        await setCities(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return { cities, fetchGetCities };
};

export default useGetCity;
