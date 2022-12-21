import { useState } from 'react';
import { getSize } from '../helpers/actions';

const useGetSize = () => {
  const [sizes, setSizes] = useState([]);

  const fetchGetSizes = async () => {
    try {
      const response = await getSize();
      if (response) {
        await setSizes(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return { sizes, fetchGetSizes };
};

export default useGetSize;
