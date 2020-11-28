/*
过滤特殊字符
* */
//使用export暴露函数
// eslint-disable-next-line no-irregular-whitespace
import fa from "element-ui/src/locale/lang/fa";

export function stripscript(str) {
    // eslint-disable-next-line no-irregular-whitespace
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（ ）&mdsh;—|{}【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0;i<str.length;i++){
        rs=rs+str.substr(i,1).replace(pattern,'');
    }
    return rs;
}
//验证邮箱
export function validateEmail(value) {
    var reg = /^([a-zA-Z]|[0-9])(\w|\.-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    //使用三元运算表达
    // return !reg.test(value) ?true :false;
    if(!reg.test(value)){
        return true
    }else{
        return false
    }
}
//验证密码
export function validatePass(value) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    if(!reg.test(value)){
        return true
    }else{
        return false
    }
}
//验证重复密码
export function validatePasses(value) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    if(!reg.test(value)){
        return true
    }else{
        return false
    }
}
//验证验证码
export function validateCode(value) {
    let reg = /^[a-z0-9]{6}$/
    if(!reg.test(value)){
        return true
    }else{
        return false
    }
}

