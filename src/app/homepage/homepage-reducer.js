import { Map } from "immutable";
import { set } from "../../util/functional-immutable";
import {
  POST_SIGNATURE
} from "./homepage-actions";


const initialState = new Map();

const HomepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNATURE:
      return set("signatureResponse", action.signatureResponse, state);
    default:
      return state;
  }
}


export default HomepageReducer;
