// 参数1：请求方法
// 参数2：url
// 参数3：请求参数 args
// 参数4：成功请求后操作 fn()
function ajax_get(url, successFun){
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    request.open('GET', url);
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status == '200') {
                if (successFun) {
                    successFun(request.response);
                }
            } else {
                console.log(request.status);
            }
        }
    }
}
