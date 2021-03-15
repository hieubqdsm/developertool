// let generate_xxx = document.getElementsByName("generate_xxx");
// generate_xxx.addEventListener("click", render_function());

function render_function() {
    let var_param_1 = document.getElementById("pm1");
    let var_param_2 = document.getElementById("pm2");
    let code_template = document.getElementById("tpl");
    let result_element = document.getElementById("result");
    let mp1_text_type = document.getElementsByName("pm1_text_type");
    let mp2_text_type = document.getElementsByName("pm2_text_type");
    let space_manipulate_1 = document.getElementById("replace_pm1");
    let space_manipulate_2 = document.getElementById("replace_pm2");
    let array_param_1 = var_param_1.value.split(",");
    let array_param_2 = var_param_2.value ? var_param_2.value.split(",") : '';

    let final_result = '';
    for (let i = 0; i < array_param_1.length; i++) {
        if (array_param_2.length > 0) {
            let pm1_text_format;
            for (let j = 0, length = mp1_text_type.length; j < length; j++) {
                if (mp1_text_type[j].checked) {
                    pm1_text_format = mp1_text_type[j].value;
                    break;
                }
            }
            let pm1_remove_space = space_manipulate_1.value;
            let pm2_text_format;
            for (let k = 0, length = mp2_text_type.length; k < length; k++) {
                if (mp2_text_type[k].checked) {
                    pm2_text_format = mp2_text_type[k].value;
                    break;
                }
            }
            let pm2_remove_space = space_manipulate_2.value;
            let temp_text = code_template.value.replace(/{{pm1}}/g, refine_text(array_param_1[i].trim(), pm1_remove_space, pm1_text_format));
            temp_text = temp_text.replace(/{{pm2}}/g, refine_text(array_param_2[i].trim(), pm2_remove_space, pm2_text_format));
            final_result += temp_text;
            final_result += "\n\n";
        } else {
            let pm1_text_format;
            for (let j = 0, length = mp1_text_type.length; j < length; j++) {
                if (mp1_text_type[j].checked) {
                    pm1_text_format = mp1_text_type[j].value;
                    break;
                }
            }
            let pm1_remove_space = space_manipulate_1.value;
            final_result += code_template.value.replace(/{{pm1}}/g, refine_text(array_param_1[i].trim(), pm1_remove_space, pm1_text_format));
            final_result += "\n\n";
        }

    }
    result_element.innerText = final_result;
}

function refine_text(raw_text, remove_space, text_format) {
    let refined_text = "";
    switch (text_format) {
        case "Caption":
            refined_text = titleCase(raw_text);
            break;
        case "Camel":
            refined_text = camelCase(raw_text);
            break;
        default:
        case "Origin":
            refined_text = raw_text;
            break;
    }
    switch (remove_space) {
        case "setunderline":
            refined_text = refined_text.replace(/ /g, "_");
            break;
        case "setminus":
            refined_text = refined_text.replace(/ /g, "-");
            break;
        case "removespace":
            refined_text = refined_text.replace(/ /g, "");
            break;
        default:
            break;

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
