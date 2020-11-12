function render_function() {
    let var_param_1 = document.getElementById("pm1");
    let var_param_2 = document.getElementById("pm1");
    let code_template = document.getElementById("tpl");
    let result_element = document.getElementById("result");
    let pm1_option = document.getElementById("pm1_origin");
    let pm2_option = document.getElementById("pm1_origin");
    let mp1_text_type = document.getElementsByName("pm1_text_type");
    let mp2_text_type = document.getElementsByName("pm2_text_type");
    let array_param_1 = var_param_1.value.split(",");
    let array_param_2 = var_param_2.value.split(",");
    let final_result = '';
    for (let i = 0; i < array_param_1.length; i++) {
        if (array_param_2.length > 0) {
            let temp_text = code_template.value.replace("{{pm1}}", refine_text(array_param_1[i].trim(), pm1_option.value, mp1_text_type.value));
            temp_text = temp_text.replace("{{pm2}}", refine_text(array_param_2[i].trim(), pm2_option.value, mp2_text_type.value));
            final_result += temp_text;
            final_result += "";
        } else {
            final_result += code_template.value.replace("{{pm1}}", refine_text(array_param_1[i].trim(), pm1_option.value, mp1_text_type.value));
            console.log(1111,pm1_option.value, mp1_text_type.value);
            final_result += "<br>";
        }

    }
    result_element.innerHTML = final_result;
}

function refine_text(raw_text, remove_space, text_format) {
    let refined_text = "";
    switch (text_format) {
        default:
        case "Origin":
            refined_text = raw_text;
            break;
        case "Caption":
            refined_text = titleCase(raw_text);
            break;
        case "Camel":
            refined_text = camelCase(raw_text);
    }
    if (remove_space === 1) {
        refined_text = refined_text.replace(" ", refined_text);
    }
    return refined_text;
}

function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

function camelCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        if (i > 0) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
    }
    return splitStr.join(' ');
}