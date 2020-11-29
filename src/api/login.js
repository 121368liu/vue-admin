import service from '@/utils/request'
/*
获取验证码
* */
//请求地址
export function GetSms(data) {
   return  service.request({
        method: 'post',
        url: '/getSms/',
        data
        // data:data左边的data是变量名(key)是后台接收的。右边的data是接收的参数。如果两者都同是同名的情况下，可以写成单一个即可（ES6的写法)

    });
}
/*
获取用户角色
*
export function getUserRole(data) {
    return service.request({
        method: 'post',
        url: '/userRole/',
        data
        // data:data左边的data是变量名(key)是后台接收的。右边的data是接收的参数。如果两者都同是同名的情况下，可以写成单一个即可（ES6的写法)

    });
}*/
/*
* 退出
export function Logout(data) {
    return service.request({
        method: 'post',
        url: '/logout/',
        data
        // data:data左边的data是变量名(key)是后台接收的。右边的data是接收的参数。如果两者都同是同名的情况下，可以写成单一个即可（ES6的写法)
    });
}*/
/*
注册
*
export function Login(data) {
    return service.request({
        method: 'post',
        url: '/login/',
        data
        // data:data左边的data是变量名(key)是后台接收的。右边的data是接收的参数。如果两者都同是同名的情况下，可以写成单一个即可（ES6的写法)
    });
}*/
/*
登录
* */
