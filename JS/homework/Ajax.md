# Ajax

异步服务端请求数据

## 核心对象

- XMLHttpRequest
- 兼容 ie6：ActiveXObject

## 使用步骤

1. 创建 ajax 对象
2. 向服务器创建请求，open(请求方式，url，同/异步)
3. 发送请求参数，post 写在 send()中，get 写在 url 中
4. 接收响应

```js
function ajax(method, url, args, successFn) {
  var request = null;
  // 1
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (method == "get") {
    url = url + "?" + args;
  }

  // 2
  request.open(method, url); //第三个参数若设false则同步请求

  // 3
  if (method == "get") {
    request.send(); // request.send(null)
  } else {
    request.send(args); //key1=value1?key2=value2...
  }

  // 4
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      successFn && successFn(request.response);
      // var data = request.responseText;
    } else {
      new Error();
    }
  };
}
```

2.
