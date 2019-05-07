#### 请用递归的方式遍历树形数据结构中的每一个节点
```
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

#### 将类似以下JSON表示的树状结构(可以无限层级)通过parseDOM函数(使用document.createElement,document.createTextNode,appendChild等方法)生成一颗DOM树(返回一个element元素)
```
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

#### 不借助外部变量，交换两数
```
function numberChange(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    return {a,b}
}
numberChange(7,8)//{a: 8, b: 7}
```

#### 可借助外部变量
```
function numChange(a,b){
    var temp=null;
    temp=a;
    a=b;
    b=temp;
    return {a,b}
}
numChange(8,9)//{a: 9, b: 8}
```