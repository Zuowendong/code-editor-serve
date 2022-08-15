const ejs = require("ejs");
const prettier = require("prettier");
const fs = require("fs");
const path = require("path");

module.exports = function createFormTemplate(config) {
    const formTemplate = fs.readFileSync(
        path.resolve(__dirname, "../template/form.ejs")
    );

    const code = ejs.render(formTemplate.toString(), {
        config,
    });

    return prettier.format(code, { parser: "babel" });
};
