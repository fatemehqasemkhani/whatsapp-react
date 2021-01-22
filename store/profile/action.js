import { request } from "../request";
import { GET_PROFILE_ERROR, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from "./constants";
import { getProfile } from "./service";

export const getProfileAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });

    const response = await request.get(getProfile());

    if (response.ok) {
      dispatch({ type: GET_PROFILE_SUCCESS, payload: response.data });
      return response.data;
    }

    dispatch({ type: GET_PROFILE_ERROR });
    return false;
  };
};
