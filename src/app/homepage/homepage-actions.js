import axios from "axios";
import { fromJS } from "immutable";

export const POST_SIGNATURE = "POST_SIGNATURE";


export const setSignature = (signatureResponse) => ({
  type: POST_SIGNATURE,
  signatureResponse
});

export const postSignature = (params) => async dispatch => {
  try {
    const response = await axios.post("/api/1.0/verify-signature", params);
    dispatch(fetchBuild(fromJS(response)));
  } catch (error) {
    console.trace(error);
  }
};