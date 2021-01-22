// @flow
import { GET_PROFILE_ERROR, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from "./constants";
import type { InitialStateTypes } from "../../utils/globalTypes";

const initialState: InitialStateTypes = {
  loading: false,
  data: [],
  error: false
};

export const profile = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    // profile requests
    case GET_PROFILE_REQUEST:
      return { ...state, loading: true };
    case GET_PROFILE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_PROFILE_ERROR:
      return { ...state, loading: false, data: null, error: true };

    default:
      return state;
  }
};
