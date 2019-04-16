## 移动端适配

### 百分比
适用于宽度自适应，文字块

1. 利用百分比实现宽高比固定

有时，我们希望宽度自适应，高度随宽度变化而变化，并有固定的宽高比。
用height百分比显然不行，height百分比是以父元素高度为基准的，而此时需要以宽度为基准来设置高度。

所以这里可以用到padding-top或者padding-bottom，padding是以父元素的width为基准的。我们可以设置元素的height：0，然后用padding-bottom将元素撑开，以实现固定宽高比。

还可以利用vw，vh设置

2. rem

以<html>元素字体为基准的单位：默认font-size为16px的话，1rem=16px。
可以根据js .clientWidth 读取屏幕宽度，并计算对应的尺寸。

3. 怎样适应视网膜分辨率？
![怎样适应视网膜分辨率](http://www.w3cplus.com/sites/default/files/blogs/201212/retina-web-10.jpg)


### dpr
dpr(device pixel ratio)设备像素比
