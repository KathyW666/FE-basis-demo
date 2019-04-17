# cookie

##### 概述

浏览器可以储存 ```cookie```，浏览器的安装目录下会专门有一个 cookie 文件夹来存放各个域下设置的 ```cookie```

当网页要发```http```请求时，浏览器会先检查是否有相应的```cookie```，有则自动添加在```request header```中的```cookie```字段中。

那么，什么样的数据适合存储在```cookie```中? 即那些每次请求都需要发送给服务器的数据，如身份认证。

cookie标准还是做了一些限制的：每个域名下的 ```cookie``` 的大小最大为4KB，每个域名下的cookie数量最多为20个, 防止同时限制滥用 ```cookie``` 携带信息。

##### cookie的属性

- ```expires(http/1.0) or max-age(http/1.1)```：有效时间，默认为```session```,即关闭浏览器就清除
- ```domain & path```
- ```secure```: 当请求是HTTPS或者其他安全协议时，包含 secure 选项的 cookie 才能被发送至服务器
- HttpOnly: 设置```cookie```能否被js访问

##### 设置 cookie 的一个小 tip
在 chrome 里，浏览器不支持本地静态```cookie```，通过编译器设置发布于本地服务器```127.0.0.1:...```后，才能设置

当 name/domain/path 3个字段都相同的时候，```cookie``` 会被覆盖

参考资料
[cookie](https://segmentfault.com/a/1190000004556040),
[CORS](http://www.ruanyifeng.com/blog/2016/04/cors.html)
