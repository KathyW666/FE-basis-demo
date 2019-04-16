## 移动端适配

##### 1. 利用百分比实现宽高比固定

想实现宽度自适应，高度随宽度变化而变化，宽高比固定。
用height百分比显然不行，height百分比是以父元素高度为基准的，而此时需要以宽度为基准来设置高度。

所以这里可以用到padding-top或者padding-bottom，padding是以父元素的width为基准的。我们可以设置元素的height：0，然后用padding-bottom将元素撑开，以实现固定宽高比。

还可以利用vw，vh设置

##### 2. rem

以<html>元素字体为基准的单位：默认font-size为16px的话，1rem=16px。
可以根据 .clientWidth 读取屏幕宽度，并计算对应的尺寸。

##### 3. 怎样适应视网膜分辨率？
![怎样适应视网膜分辨率](http://www.w3cplus.com/sites/default/files/blogs/201212/retina-web-10.jpg)

##### 4. dpr 和 viewport
dpr(device pixel ratio)设备像素比
viewport 移动端有三:
- ideal viewport 理想大小，通常设为设备屏宽高
- visual viewport 可视大小，整个page在屏幕中显示的大小, 不会超过layout
- layout viewport 布局大小，page页面的大小

通常页面不会完全显示，因此 visual viewport <= layout viewport,

##### 5. 关于flexible方案
- 如果 <meta> 标签中设定了viewport，则取值已设定的 初始dpr 和 ideal viewport 的宽度大小（通常=device-width设备宽度）
- 若没有<meta>, 根据设备设置 dpr 和 缩放倍数（1/dpr）,压缩css像素，保证同等物理大小的范围里，css像素和物理像素比为1.
- 添加<meta>属性及标签
- 监听页面变化
- 更新根元素字体大小：这里如果页面宽度低于540px,那么页面中html的font-size也会按照（当前页面宽度/640）的比例变化

initial-dpr 的作用方式是：同时设置 visual viewport 和 layout viewport，如果width属性也有设定，则取二者较大值
