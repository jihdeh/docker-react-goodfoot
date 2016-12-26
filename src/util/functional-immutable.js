import {invoker} from "ramda";
import { List, Map } from "immutable";

export const get = invoker(1, "get");
export const set = invoker(2, "set");
export const map = invoker(1, "map");