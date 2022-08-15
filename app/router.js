module.exports = (app) => {
    const { router, controller } = app;

    // CRUD 路由结构
    router.resources("components", "/api/canvasComps", controller.components);

    // 获取画布中所有组件数据查询
    router.get("/api/getCanvasComps", controller.components.getCanvasComps);
    // 保存画布中所有组件数据
    router.post("/api/setCanvasComps", controller.components.setCanvasComps);
    // 获取代码模板
    router.get("/api/getCodeTemp", controller.components.getCodeTemp);
};
