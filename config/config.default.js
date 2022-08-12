module.exports = (appInfo) => {
    const config = (exports = {});
    config.keys = appInfo.name + "_1660267074084_8090";
    config.middleware = [];
    const userConfig = {
        security: {
            csrf: { enable: false },
        },
        mysql: {
            client: {
                host: "localhost",
                port: 3306,
                user: "root",
                password: "123456",
                database: "editor",
            },
        },
        cors: {
            origin: "*", //域名+端口 或者  *(全匹配)
            allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
        },
    };

    return {
        ...config,
        ...userConfig,
    };
};
