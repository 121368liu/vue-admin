import axios from 'axios'
import { Message } from 'element-ui';

//创建axios，赋给变量service
//手把手撸码前端API，地址http://www.web-jshtml.cn/productApi
const BASEURL=process.env.NODE_ENV === 'production' ? 'dist' : 'devApi'
const service=axios.create({
    baseURL: BASEURL,
    timeout: 1000,
});

console.log(process.env.NODE_ENV)

console.log(process.env.VUE_APP_ABC)
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //后台需要前台传相关参数（在请求头添加参数）
    // config.headers['Tokey']=getToken()
    // config.headers['UserName']=getUserName()
    console.log(config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data=response.data
    //业务需求
    if(data.resCode!==0){
        Message.error(data.message);
        return Promise.reject(data);
    }else{
        return response;
        // return Promise.resolve
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


//暴露对象
export default service;
/*
使用export default时，不能同时存在多个default
导入文件import，不需要{}
* */
