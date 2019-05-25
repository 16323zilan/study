# 最新Web前端经典面试试题及答案
## javascript:
#### javaScript中如何检测一个变量是一个String类型？写出函数来实现
::: tip 方法
- typeof(obj) === "string"
- typeof obj === "string"
- obj.constructor === String
:::
#### 用不同的js实现字符串除去空格
::: tip 方法
- 使用replace正则匹配的方法
1. > 去除所有空格: str = str.replace(/\s*/g,"");     
1. > 去除两头空格: str = str.replace(/^\s*|\s*$/g,"");
1. > 去除左空格： str = str.replace( /^\s*/, “”);
1. > 去除右空格： str = str.replace(/(\s*$)/g, "");
##### 实例如下
```
var str = " 23 23 ";
var str2 = str.replace(/\s*/g,"");
console.log(str2); // 2323
```
- 使用str.trim()方法
##### str.trim()局限性：无法去除中间的空格，实例如下：
```
var str = "   xiao  ming   ";
var str2 = str.trim();
console.log(str2);   //xiao  ming 
```
#####  同理，str.trimLeft()，str.trimRight()分别用于去除字符串左右空格。
- 使用jquery,$.trim(str)方法
##### $.trim(str)局限性：无法去除中间的空格，实例如下：
```
var str = "   xiao  ming   ";
var str2 = $.trim(str)
console.log(str2);   //  xiao  ming
```
:::
#### 你如何获取浏览器URL中查询字符串中的参数？
测试地址为：http://www.runoob.com/jquery/misc-trim.html?channelid=12333&name=xiaoming&age=23
##### 实例如下：
```
function showWindowHref(){
    var sHref = window.location.href;
    var args = sHref.split('?');
    if(args[0] == sHref){
        return "";
    }
    var arr = args[1].split('&');
    var obj = {};
    for(var i = 0;i< arr.length;i++){
        var arg = arr[i].split('=');
        obj[arg[0]] = arg[1];
    }
    return obj;
}
var href = showWindowHref(); // obj
console.log(href['name']); // xiaoming
```
#### 如何用原生js给一个按钮绑定两个onclick事件
```
var btn = document.getElementById('btn');
btn.addEventListener("click",hello1);
btn.addEventListener("click",hello2);
function hello1(){
    alert("hello1")
}
function hello2(){
    alert("hello2")
}
```
### 网页性能优化

1. 从用户角度而言，优化页面能够让页面加载的更快，能够让用户对页面进行操作时得到及时的响应，为用户提供更为友好的体验
2. 从服务商而言，优化页面能够减少页面的请求次数，减少请求所占宽带，能够节省可观的资源。
##### 按粒度分为两类
一、页面级别的优化
    a. JavaScript 压缩和模块打包
    b. 按需加载资源
    c. 在使用DOM操作库时用上array-ids
    d. 缓存
    e. 启用HTTP/2
    f. 应用性能分析
    g. 使用负载均衡方案
    h. 为了更快的启动时间考虑一下同构
    i. 使用索引加速数据库查询
    j. 使用更快的转义方案
    k. 避免或最小化JavaScript和Css的使用而阻塞渲染
    l. 用于未来的一个建议：使用service workers + 流
    m .图片优化

## CSS
#### 阐述清楚浮动的方式
1. 父级div定义height

原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题。 
优点：简单、代码少、容易掌握 
缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题

2. 父级div定义overflow:hidden

原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度 
优点：简单、代码少、浏览器支持好

3. 结尾处加空div标签，clea:both

原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度 
优点：简单、代码少、浏览器支持好、不容易出现怪问题
缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div，让人感觉很不好

4. 父级div定义伪类：after，和zoom

原理:IE8以上和非IE浏览器才支持：after，zoomIE专有属性，可解决IE6,IE7浮动问题
优点：浏览器支持好、不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等） 
缺点：代码多、不少初学者不理解原理，要两句代码结合使用才能让主流浏览器都支持