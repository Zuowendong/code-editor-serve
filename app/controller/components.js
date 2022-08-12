const Controller = require("egg").Controller;
const BaseController = require("./base");

class ComponentsController extends BaseController {
    constructor(...args) {
        super(...args);
        this.entity = "components";
    }
}

module.exports = ComponentsController;
