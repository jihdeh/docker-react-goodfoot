// @flow

import axios from "axios";
import { fromJS } from "immutable";

export const SET_SIGNATURE = "SET_SIGNATURE";


export const setSignature = (signatureResponse: Object) => ({
  type: SET_SIGNATURE,
  signatureResponse
});

export const postSignature = ({sigKey, hash}) => async dispatch => {
  try {
  	let key = sigKey;
    const response = await axios.post("/api/1.0/verify-signature", {key}, {
    	headers: {
    		"x-key-hash": hash
    	}
    });
    dispatch(setSignature(fromJS(response)));
  } catch (error) {
    dispatch(setSignature(fromJS({status: 400})));
  }
};