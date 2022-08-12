module.exports = (app) => {
    const { router, controller } = app;
    router.get("/", controller.home.index);

    // CRUD 路由结构
    router.resources("components", "/api/canvasComps", controller.components);

    router.get("/api/getCanvseComps", controller.components.getCanvseComps);
};
