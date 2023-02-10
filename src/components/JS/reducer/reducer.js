import { FAILED, LOADING, READY, READY_SEARCH } from '../actions/actions';
import { LOADING_SEARCH, FAILED_SEARCH } from './../actions/actions';

const initialState = {
  onLoading: true,
  searchVal: 'Gafsa',
  data: [],
  error: null,
};
const searchInitState = {
  onLoading: true,
  searchValue: 'Gafsa',
  data: [],
  error: null,
};

export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, onLoading: true };
    case READY:
      return { ...state, data: payload, onLoading: false };
    case FAILED:
      return { ...state, error: payload, onLoading: false };
    default:
      return state;
  }
};
export const searchReducers = (state = searchInitState, { type, payload }) => {
  switch (type) {
    case LOADING_SEARCH:
      return { ...state, onLoading: true };
    case READY_SEARCH:
      return { ...state, data: payload, onLoading: false };
    case FAILED_SEARCH:
      return { ...state, error: payload, onLoading: false };
    default:
      return state;
  }
};
