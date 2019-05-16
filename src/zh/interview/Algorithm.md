---
title: 算法题
sidebar: auto
sidebarDepth: 2
---
## 递归的方式遍历树形数据结构

1. 请用递归的方式遍历树形数据结构中的每一个节点
```js
const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake'
                    }
                ]
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men'
                    }
                ]
            }
        ]
    }
];
var elementBox = document.querySelector('.box');
var arr = "";
function render(opt) {
    arr += '<ul>';
    opt.forEach(item => {
        arr += '<li>';
        arr += '<h3>' + item.value + '</h3>';
        if (item.children && item.children.length > 0) {
            render(item.children)
        }
        arr += '</li>';
    })
    arr += '</ul>';
}
render(options);
elementBox.innerHTML = arr;
```

2. 将类似以下JSON表示的树状结构(可以无限层级)通过parseDOM函数(使用document.createElement,document.createTextNode,appendChild等方法)生成一颗DOM树(返回一个element元素)
```js
const JsonTree = [
    {
        "tagName": "ul",
        "props": {
            "className": "list",
            "data-name": "jsontree"
        },
        "children": [
            {
                "tagName": "li",
                "props": {
                    "className": "list",
                    "data-name": "jsontree"
                },
                "children": "一棵开花的树"
            },
            {
                "tagName": "li",
                "props": {
                    "className": "list",
                    "data-name": "jsontree"
                },
                "children": "席慕容"
            },
            {
                "tagName": "li",
                "props": {
                    "className": "list",
                    "data-name": "jsontree"
                },
                "children": [
                    {
                        "tagName": "p",
                        "props": {
                            "className": "list",
                            "data-name": "jsontree"
                        },
                        "children": "海子"
                    }
                ]
            }
        ]
    },
    {
        "tagName": "a",
        "props": {
            "href": "https://www.aliyun.com",
            "target": "_blank"
        },
        "children": "阿里云"
    }
];
var tree = document.querySelector('.tree');
function parseDOM(opt, tree) {
    opt.forEach(item => {
        var elementTree = document.createElement(item.tagName);
        if (item.props) {
            for (val in item.props) {
                elementTree[val] = item.props[val];
            }
        }
        if (item.children) {
            //判断此处是否为数组，数组递归，不是数组，直接作为节点的文本内容
            if (item.children instanceof Array && item.children.length > 0){
                parseDOM(item.children, elementTree)
            }else{
                elementTree.innerHTML = item.children;
            }
        }
        tree.appendChild(elementTree)
    })
}
//调用传入dom树数据，父节点
parseDOM(JsonTree, tree);
```

## 两数交换
1. 不借助外部变量，交换两数
```js
function numberChange(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    return {a,b}
}
numberChange(7,8)//{a: 8, b: 7}
```

2. 可借助外部变量
```js
function numChange(a,b){
    var temp=null;
    temp=a;
    a=b;
    b=temp;
    return {a,b}
}
numChange(8,9)//{a: 9, b: 8}
```

## 排序
1. 冒泡排序
- 比较相邻的两个元素，如果前一个比后一个大，则交换位置。

- 第一轮的时候最后一个元素应该是最大的一个。

- 按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。
- 时间复杂度O(n^2),最好情况O(n),最坏情况O(n^2)，空间复杂度O(1),稳定
```js
function sort(elements){
    for(var i = 0; i < elements.length - 1; i++) {
        for(var j = 0; j < elements.length - i - 1; j++){
            if(elements[j] > elements[j + 1]){
                var swap = elements[j];
                elements[j] = elements[j + 1];
                elements[j + 1] = swap;
            }
        }
    }
}
sort([3,1,5,2,6,0,9,4])
```
2. 快速排序
- 对冒泡排序的一种改进，第一趟排序将数据分成两部分，一部分比另一部分的所有数据都要小，然后递归调用，在两边都实行快速排序。
- 时间复杂度O(n logn),最好情况O(n logn),最坏情况O(n^2)，空间复杂度O(1),不稳定
```js
function quickSort(elements) {
    //如果数组<=1,则直接返回
    if(elements.length <= 1){
        return elements;
    }
    //
    var pivotIndex = Math.floor(elements.length / 2);
    //确定基准数
    var pivot = elements.splice(pivotIndex,1)[0];
    var left = [];
    var right= [];
    for(var i = 0; i < elements.length; i++){
        if(elements[i] < pivot){
            left.push(elements[i]);
        } else {
            right.push(elements[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
quickSort([5,6,7,2,1,9,4]);
```
3. 插入排序
a. 从第一个元素开始，该元素已经被排序

b.取出下一个元素，在已经排序的元素序列中从后向前扫描

c.如果该元素（以排序）大于新元素，将该元素移到下一个元素位置

d.重复步骤,直到找到已排序的元素小于或者等于新元素的位置

e.将新元素插入到下一个位置中

f.重复步骤b
```js
//假设第零个元素是一个有序的数列，第一个以后的是无序的序列
//从第一个元素开始将无序数列的元素插入到有序数列中
//升序排序
function sort(elements) {
    for(var i = 1; i < elements.length; i ++){
        if(elements[i] < elements[i - 1]){
            //取出无序数列中的第i个作为被插元素
            var guard = elements[i];
            //现在的j代表i的上一个下标
            var j = i - 1;
            //记住有序数列的最后一个位置，并且将有序数列位置扩大一个
            //i的位置上为上一个元素
            elements[i] = elements[j];
            //比大小，找到被插入元素所在的位置
            while(j >= 0 && guard < elements[j]) {
                elements[j + 1] = elements[j];
                j--;
            }
            elements[j + 1] = guard;//插入
        }
    }
}
sort([3,1,5,2,6,0,9,4])
```
4. 折半查找
- 首先找到一个中间值，通过与中间值比较，大的放右，小的放左，再在两边找中间值，持续操作
- 折半查找必须在有序数组中才有效，无序的数组不能实现查找功能
```js
function binarySearch(data, dest, start, end) {
    var end = end || data.length - 1,
        start = start || 0,
        m = Math.floor((start + end) / 2);
    if(data[m] == dest) {
        return m;
    }
    if(dest < data[m]) {
        return binarySearch(data, dest, 0, m-1);
    }else {
        return binarySearch(data, dest, m+1, end);
    }
    return false;
}
binarySearch([1,2,3,4,5,6,7,8,9],4)
```
