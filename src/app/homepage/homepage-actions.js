import axios from "axios";
import { fromJS } from "immutable";

export const SET_SIGNATURE = "SET_SIGNATURE";


export const setSignature = (signatureResponse) => ({
  type: SET_SIGNATURE,
  signatureResponse
});

export const postSignature = ({sigKey, hash}) => async dispatch => {
  try {
    const response = await axios.post("/api/1.0/verify-signature", {sigKey, hash}, {
    	headers: {
    		"key": sigKey,
    		"x-key-hash": hash
    	}
    });
    dispatch(setSignature(fromJS(response)));
  } catch (error) {
    console.trace(error);
  }
};