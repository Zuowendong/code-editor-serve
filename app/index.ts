import Koa from "koa";
import router from "./router";
import { Server } from "http";
import AccessLogMiddleware from "../app/middleware/AccessLogMiddleware";
import db from "./db";
db();

const app = new Koa();
app.use(AccessLogMiddleware);
app.use(router.routes());

const run = (port: any): Server => {
	return app.listen(port);
};

export default run;
