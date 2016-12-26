import { Map } from "immutable";
import { set } from "../../util/functional-immutable";
import {
  SET_SIGNATURE
} from "./homepage-actions";


const initialState = new Map();

const HomepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNATURE:
      return set("signatureResponse", action.signatureResponse, state);
    default:
      return state;
  }
}


export default HomepageReducer;
