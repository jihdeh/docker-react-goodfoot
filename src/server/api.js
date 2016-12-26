import koa from "koa";
import mount from "koa-mount";
import apiErrorHandler from "../util/api-error-handler";
import { CompareHash as compareHash } from "./routes";

export default function Api() {
  const api = koa();
  api.use(apiErrorHandler);
  api.use(mount("/1.0", compareHash));
  api.use(function* terminator() {
    return;
  });

  return api;
}
