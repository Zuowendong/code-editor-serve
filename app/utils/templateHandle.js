const createFormTemplate = require("./createFormTemplate");

module.exports = function templateHandle(codeTempStr) {
    const compData = JSON.parse(codeTempStr[0].data)[0];

    const { row, column } = compData.props.layout.attrs;
    // 表单布局
    const ranks = {
        rNum: row.value,
        cNum: column.value,
    };

    const formKeyMap = {
        ZyfInput: "el-input",
        ZyfInputNumber: "el-input-number",
    };
    // 表单项
    let formItems = compData.children.map((childItem) => {
        return {
            label: childItem.name,
            prop: "aaa",
            tag: "el-input",
        };
    });

    const codeTemp = createFormTemplate({
        ranks,
        formItems,
    });
    console.log(codeTemp);

    return codeTemp;
};
