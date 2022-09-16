import Koa from "koa";
import dotenv from 'dotenv'
import router from "./router";
import { Server } from "http";

dotenv.config()

const app = new Koa();
app.use(router.routes());

const run = (port: any): Server => {
	return app.listen(port);
};

export default run;
