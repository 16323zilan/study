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
