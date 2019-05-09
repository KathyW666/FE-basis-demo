# flex布局

#### 是什么？
自适应弹性布局
- 自动判断布局空间，修改自身尺寸
- 多个box在多个方向进行对齐&分布

#### 什么时候用？适用于什么场景？
- 布局内部需要自适应
- 布局内部需要多个方向排列对齐

应用于：
- 移动端适配，移动端开发
- APP组件，页面栏目or小范围板块布局
 
#### 基础概念
 - 布局结构
 
	双层结构：外层容器`flex-container`,激活弹性机制。
	内层`flex-item`自动获得相关特性。 
	`flex-container`外部和`flex-item`内部元素不受影响。
 
 - flex机制

	任何一个容器都可以指定为flex布局，其内部第一层级的子项自动变为flex项目
 
	 `display:flex` 块状flex容器
	 `display:inline-flex`行间flex容器
 
	**一旦激活flex机制，子项的<font color=darkpink>`float`</font>、<font color=darkpink>`clear`</font> 和 <font color=darkpink>`vertical-align`</font> 属性失效**
 
 - 区域轴向
	
	主轴 & 交叉轴，flex容器的两端为轴的起点和终点
	![from:阮一峰-flex布局][1]

#### flex 属性
`flex-container`6个属性，`flex-item`6个属性
 - 外围容器相关属性：对子项的排列和对齐
	- `flex-direction`：定义主轴和交叉轴的方向，文档流入盒子的方向
	- `flex-wrap`：换行 `nowrap`：往往对应自适应，外围容器固定，item自动变化
	- `flex-flow`：文档流 `flex-direction` + `flex-wrap` 缩写
	- `justify-content`：主轴对齐（左中右，留白环绕，留白中间）
	- `align-items`：交叉轴对齐
	- `align-content`：交叉轴多行的对齐方式（容器若只有一行，则无效，避免与`align-items`发生冲突）

	那么问题来了：水平垂直居中的一个方式，就可以用<font color=darkpink>**`flex布局`**</font>实现
 - 子项相关属性：子项的自适应伸缩及分配
	- `flex-grow`：扩展比例，分配的是剩余的空间（wrap），默认0不扩展
	- `flex-shrink`：收缩比例（nowrap)，默认1等比收缩
	- `flex-basis`：定义item在主轴上的基本尺寸(定义子项的基本宽or高)，默认auto
	- `flex`缩写 固定顺序（grow shrink basis）可省略。`none` `auto`（可扩展可收缩）
		
		快捷写法：只写grow shrink，默认忽略设定的`width`；只写basis默认可扩展可收缩。尽量使用flex复合写法。
		
	- `align-self`：子项自身的交叉轴对齐方式
	- `order`：子项的排列顺序，数值越小越靠前，可以负数

		以上两个属于单独调整的两个属性
![flex属性][2]

#### 实例
 - 什么时候想到用flex
	- 移动端
	- 单、多行垂直居中
	- 需要垂直对齐的列表元素
	- 单行选项卡
	- 垂直弹性布局
	- **分栏，一些栏定宽+其他栏自适应**

#### 练习

 - 骰子🎲（练习对齐）👉[code](#)

	![dice][3]
	
 - 一栏定宽 + 一栏自适应 👉[code](#)
 - tab选项卡 👉[code](#)
 - 垂直弹性布局：👉[code](#)
	
	另一种方法：header footer position 固定位置
	注意对 `overflow` 和 <font color=darkpink>`超出视口`</font>部分滚动的设置
	
#### 常见问题

 - 简写flex属性，导致设定宽高无效
 - flex容器中的文本自动成为flex子项，除了空格
 - 子项的float、clear 和 vertical-align 属性失效
 - 如果子项是绝对定位，定位基准参考flex容器的**`content`**盒子。因为flex本身就是对其content的文档流进行操作
 - flex子项的margin：外边距合并失效，margin：auto 可自动分配剩余空间，达到垂直居中的效果，类似操作flex容器的主轴交叉轴对齐
 - flex容器主轴和writing-mode：一旦独立设定writing-mode，优先级高于flex容器轴向操作，子项内的文字也会随
writing-mode改变


#### 参考资料
[阮一峰-flex布局](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

[zhangwang-flex属性](https://images2015.cnblogs.com/blog/1077208/201707/1077208-20170715083110384-1725116546.png)

[1]: http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png
[2]: https://images2015.cnblogs.com/blog/1077208/201707/1077208-20170715083110384-1725116546.png
[3]: ./dice.png