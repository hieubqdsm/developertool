function render_function() {
    var var_param = document.getElementById("pm1");
    var code_template = document.getElementById("tpl");
    var result_element = document.getElementById("result");
    var array_param = var_param.value.split(",");
    var final_result = '';
    for (let i = 0; i < array_param.length; i++) {
        final_result += code_template.value.replace("{{pm1}}", array_param[i].trim());
        final_result += "\n";
    }
    result_element.innerText = final_result;
}