import Koa from "koa";
import dotenv from "dotenv";
import router from "./router";
import { Server } from "http";
import AccessLogMiddleware from "../app/middleware/AccessLogMiddleware";

dotenv.config();

const app = new Koa();
app.use(AccessLogMiddleware)
app.use(router.routes());

const run = (port: any): Server => {
	return app.listen(port);
};

export default run;
