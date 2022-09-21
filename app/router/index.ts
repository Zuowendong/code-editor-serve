import koaRouter from "koa-router";
import indexController from "../controller/indexController";
import sceneController from "../controller/sceneController";

const router = new koaRouter({ prefix: "/api" });

router.get("/", indexController.index);

router.post("/createScene", sceneController.create);
router.get("/sceneList", sceneController.list);

export default router;
