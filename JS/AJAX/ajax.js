// 封装参数：
// 参数1：请求方法
// 参数2：url
// 参数3：请求参数 args
// 参数4：成功请求后操作 fn()

function ajax(method, url, args, successFn) {
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    if (method == 'get') {
        url = url + '?' + args;
    }
    request.open(method, url);
    if (method == 'get') {
        request.send();
    } else {
        request.setRequestHeader('content-type','application/x-www-form-urlencoded');
        request.send(args);
    }
    request.onreadystatechange = function(){
        if (request.readyState == 4) {
            if (request.status == 200) {
                successFn && successFn(request.response);
            } else {
                alert('error: '+ request.status);
            }
        }
    }
}
