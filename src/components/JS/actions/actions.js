import axios from 'axios';
//search
export const LOADING_SEARCH = 'LOADING_SEARCH';
export const READY_SEARCH = 'READY_SEARCH';
export const FAILED_SEARCH = 'FAILED_SEARCH';
//search actions

export const getSearchValue = location => async dispatch => {
  const API_KEY = '632ce770018b45c0a9e180343230302';
  const API_ENDPOINT = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`;
  dispatch({ type: LOADING_SEARCH });
  try {
    const resp = await axios.get(API_ENDPOINT);
    dispatch({ type: READY_SEARCH, payload: resp.data });
  } catch (error) {
    dispatch({ type: FAILED_SEARCH, payload: error });
  }
};

// weather
export const LOADING = 'LOADING';
export const READY = 'READY';
export const FAILED = 'FAILED';
//
export const getCurrentData = name => async dispatch => {
  dispatch({ type: LOADING });
  try {
    const resp =
      await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=632ce770018b45c0a9e180343230302&&q=${name}&days=4&aqi=no&alerts=no
`);

    dispatch({ type: READY, payload: resp.data });
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
  }
};
