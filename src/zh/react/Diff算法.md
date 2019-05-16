
# Diff算法
#### 1、前言介绍
::: tip Introduction
React 中最值得称道的部分莫过于 Virtual DOM 与 diff 的完美结合，特别是其高效的 diff 算法，让用户可以无需顾忌性能问题而”任性自由”的刷新页面，让开发者也可以无需关心 Virtual DOM 背后的运作原理，因为 React diff 会帮助我们计算出 Virtual DOM 中真正变化的部分，并只针对该部分进行实际 DOM 操作，而非重新渲染整个页面，从而保证了每次操作更新后页面的高效渲染，因此 Virtual DOM 与 diff 是保证 React 性能口碑的幕后推手。
:::
#### 1、什么是DOM Diff算法
- Web界面由DOM树来构成，当其中某一部分发生变化时，其实就是对应的某个DOM节点发生了变化。在React中，构建UI界面的思路是由当前状态决定界面。前后两个状态就对应两套界面，然后由React来比较两个界面的区别，这就需要对DOM树进行Diff算法分析。
- 即给定任意两棵树，找到最少的转换步骤。达到每次界面都可以整体刷新界面的目的，势必需要对算法进行优化。这看上去非常有难度，然而Facebook工程师却做到了，他们结合Web界面的特点做出了两个简单的假设，使得Diff算法复杂度由O(n^3)直接降低到O(n)
#### 3、Diff算法的作用
计算出Virtual DOM中真正变化的部分，并只针对该部分进行原生DOM操作，而非重新渲染整个页面。
##### a.传统diff算法的作用
计算一棵树形结构转换成另一棵树形结构的最少操作，是一个复杂且值得研究的问题。传统 diff 算法通过循环递归对节点进行依次对比，效率低下，算法复杂度达到 O(n^3)，其中 n 是树中节点的总数。O(n^3) 到底有多可怕，这意味着如果要展示1000个节点，就要依次执行上十亿次的比较。这种指数型的性能消耗对于前端渲染场景来说代价太高了！现今的 CPU 每秒钟能执行大约30亿条指令，即便是最高效的实现，也不可能在一秒内计算出差异情况。
React 使用 JSX 来替代常规的 JavaScript
#### 4、调和
- 将Virtual DOM树转换成actual DOM树的最少操作的过程 称为 调和 。
- React diff算法是调和的具体实现。
#### 5、diff策略
React用三大策略将O(n^3)复杂度转化为O(n)复杂度,执行时按顺序依次执行，它们的差异仅仅因为DIFF粒度不同、执行先后顺序不同。 
> 策略一（tree diff）：

Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。新旧DOM树逐层对比的过程就是tree diff；当DOM树逐层对比完成后，即可找到所有需要被更新的元素,这样只需要对DOM树进行一次遍历，就可以完成整个树的比较;复杂度变为O(n)。

Tree DIFF是对树的每一层进行遍历，如果某组件不存在了，则会直接销毁。如图所示，左边是旧属，右边是新属，A节点及其子节点被整个移动到D节点下面去，由于React只会简单的考虑同级节点的位置变换，而对于不同层级的节点，只有创建和删除操作，所以直接删掉A、B、C组件；继续第三层，当D发现多了一个子节点A，就会创建新的A作为其子节点,重新创建A、B、C组件。此时，diff的执行情况是：
- createA-->createB-->createC-->deleteA
![cmd-markdown-Tree DIFF](https://img-blog.csdn.net/2018071718264787)

由此可以发现，当出现节点跨层级移动时，并不会出现想象中的移动操作，而是会进行删除，重新创建的动作，这是一种很影响React性能的操作。因此官方也不建议进行DOM节点跨层级的操作。
> 策略二（component diff）：
- 拥有相同类的两个组件 生成相似的树形结构，暂时认为该组件不需要被更新；
- 拥有不同类的两个组件 生成不同的树形结构。将旧的组件移除并创建新的组件，同时将组件追加到页面。
- 如果是同一个类型的组件，有可能经过一轮Virtual DOM比较下来，并没有发生变化。如果我们能够提前确切知道这一点，那么就可以省下大量的diff运算时间。因此，React允许用户通过shouldComponentUpdate()来判断该组件是否需要进行diff算法分析。

如下图所示，当组件D变为组件G时，即使这两个组件结构相似，一旦React判断D和G是不用类型的组件，就不会比较两者的结构，而是直接删除组件D，重新创建组件G及其子节点。虽然当两个组件是不同类型但结构相似时，进行diff算法分析会影响性能，但是毕竟不同类型的组件存在相似DOM树的情况在实际开发过程中很少出现，因此这种极端因素很难在实际开发过程中造成重大影响。 

![cmd-markdown-Tree DIFF](https://img-blog.csdn.net/20180717182802621)

如图所示，第一层遍历完，进行第二层遍历时，D和G组件是不同类型的组件，不同类型组件直接进行替换，将D删掉，再将G重建。
> 策略三（element diff）：

Element DIFF紧接着以上统一类型组件继续比较下去，常见类型就是列表。同一个列表由旧变新有三种行为，插入、移动和删除，它的比较策略是对于每一个列表指定key，先将所有列表遍历一遍，确定要新增和删除的，再确定需要移动的。如图所示，第一步将D删掉，第二步增加E，再次执行时A和B只需要移动位置即可

![cmd-markdown-Element DIFF](https://img-blog.csdn.net/20180717182842111)

#### 6、列表对比算法源码分析
##### 该js的作用是：深度遍历两个列表数据，每层的节点进行对比，记录下每个节点的差异。并返回该对象的差异。
@return {Object} {children: [], moves: [] }
children 是源列表 根据 新列表返回 移动或新增的数据。

比如 
```
oldList = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}];
newList = [{id: 2}, {id: 3}, {id: 1}]; 
```
最后返回的
```
children = [
  {id: 1},
  {id: 2},
  {id: 3},
  null,
  null,
  null
 ]
```
moves 是源列表oldList 根据新列表newList 返回的操作，children为null的话，依次删除掉掉，因此返回的是
```
moves = [
  {type: 0, index:3},
  {type: 0, index: 3},
  {type: 0, index: 3},
  {type: 0, index: 0},
  {type: 1, index: 2, item: {id: 1}}
]
```
##### type = 0 是删除操作， type = 1 是新增操作
```
oldList = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]; 
newList = [{id: 2}, {id: 3}, {id: 1}];
```
所以oldList根据newList来对比，{id: 4} 和 {id: 5} 和 {id: 6} 在新节点 newList没有找到，因此在moves设置为 {type:0, index:3},
所以oldList数据依次变为 [{id: 1}, {id: 2}, {id: 3}, {id: 5}, {id: 6}] 和  [{id: 1}, {id: 2}, {id: 3}, {id: 6}] 和  [{id: 1}, {id: 2}, {id: 3}]
每次在moves存储了一次的话，原数组会删掉当前的一项，因此oldList 变为 [{id: 1}, {id: 2}, {id: 3}], newList 为 [{id: 2}, {id: 3}, {id: 1}],
然后各自取出该值进行比较，也就是 oldList变为 [1, 2, 3], newList变为 [2, 3, 1]; 因此oldList相对于 newList来讲的话，第一项不相同就删掉该项 所以moves新增一项{type: 0, index:0}, index从0开始的，表示第一项被删除，然后第二项1被添加，因此moves再加一项 {type: 1, index:2, item: {id: 1}}；
##### 理解代码如下：
该方法需要传入三个参数 oldLsit, newList, key; 
oldList 和 newList 是原始数组 和 新数组， key是根据键名进行匹配。

现在分别对oldList 和 newList 传值如下数据：
var oldLsit = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}];
var newList = [{id: 2}, {id: 3}, {id: 1}];

因此 var oldMap = makeKeyIndexAndFree(oldList, key); 
makeKeyIndexAndFree代码如下：
```
function makeKeyIndexAndFree(list, key) {
  var keyIndex = {};
  var free = [];
  for (var i = 0, len = list.length; i < len; i++) {
    var item = list[i];
    var itemKey = getItemKey(item, key);
    if (itemKey) {
      keyIndex[itemKey] = i;
    } else {
      free.push(item);
    }
  }
  return {
    keyIndex: keyIndex,
    free: free
  }
}
```
getItemKey 代码如下：
```
function getItemKey(item, key) {
  if (!item || !key) {
    return;
  }
  return typeof key === 'string' ? item[key] : key[item]
}
```
执行代码编程如下：
```
var oldMap = {
  keyIndex: {
    1: 0, 
    2: 1,
    3: 2,
    4: 3,
    5: 4, 
    6: 5
  },
  free: []
}
var newMap = makeKeyIndexAndFree(newList, key); 输出如下：
var newMap = {
  free: [],
  keyIndex: {
    1: 2,
    2: 0,
    3: 1
  }
}
```
##### 注意：上面的是把{id: xx} 中的xx当做键， 但是当xx是数字的话，他会把数字当做索引位置来存储。
```
var newFree = newMap.free = [];
var oldKeyIndex = oldMap.keyIndex;
var newKeyIndex = newMap.keyIndex;

var moves = [];
var children = [];
var i = 0;
var freeIndex = 0;
var item;
var itemKey;

while(i < oldList.length) {
  item = oldList[i];
  itemKey = getItemKey(item, key);
  if(itemKey) {
    if(!newKeyIndex.hasOwnProperty(itemKey)) {
      children.push(null);
    } else {
      var newItemIndex = newKeyIndex[itemKey];
      children.push(newList[newItemIndex]);
    }
  } else {
    var freeItem = newFree[freeIndex++];
    children.push(freeItem || null);
  }
  i++;
}
```
while循环旧节点oldList，获取其某一项，比如 {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, 然后根据键名获取某一项的值，分别为：1,2,3,4,5,6。
然后判断 新节点中的 newKeyIndex 是否有该属性键名，newKeyIndex = {1: 2, 2: 0, 3: 1}, 判断newKeyIndex 是否有属性 1, 2, 3, 4, 5, 6, 如果没有的话，把null放到children数组里面去，如果有的话，存入children数组里面去，因此children的值变为如下：
```
children = [
  {id: 1},
  {id: 2},
  {id: 3},
  null,
  null,
  null
];

// 删除不存在的项
var simulateList = children.slice(0);
i = 0;
while (i < simulateList.length) {
  if (simulateList[i] === null) {
    remove(i);
    // 调用该方法执行删除
    removeSimulate(i);
  } else {
    i++;
  }
}
```
把children数组的值赋值到 simulateList列表中，如果某一项等于null的话，调用 remove(i)方法，把null值以对象的形式保存到moves数组里面去，
同时删除simulateList列表中的null数据。
代码如下：
```
function remove(index) {
  var move = {index: index, type: 0};
  moves.push(move);
}
function removeSimulate(index) {
  simulateList.splice(index, 1);
}
simulateList 数据变成如下：
simulateList = [
  {id： 1},
  {id:  2},
  {id:  3}
];
```
因此 moves 变成如下数据：
``` 
var moves = [
  {index: 3, type: 0},
  {index: 3, type: 0},
  {index: 3, type: 0}
];
```
再执行如下代码：
```
var j = i = 0;
while (i < newList.length) {
  item = newList[i];
  itemKey = getItemKey(item, key);

  var simulateItem = simulateList[j];
  var simulateItemKey = getItemKey(simulateItem, key);
  if (simulateItem) {
    if (itemKey === simulateItemKey) {
      j++;
    } else {
      // 新的一项，插入
      if (!oldKeyIndex.hasOwnProperty(itemKey)) {
        insert(i, item);
      } else {
        var nextItemKey = getItemKey(simulateList[j + 1], key);
        if (nextItemKey === itemKey) {
          remove(i);
          removeSimulate(j);
          j++;
        } else {
          insert(i, item);
        }
      }
    }
  } else {
    insert(i, item);
  }
  i++;
} 
```
遍历新节点数据newList var newList = [{id: 2}, {id: 3}, {id: 1}]; 然后 itemKey = getItemKey(item, key); 那么itemKey=2, 3, 1 
var simulateItem = simulateList[j];
simulateList的值如下：
```
simulateList = [
  {id： 1},
  {id:  2},
  {id:  3}
];
```
获取simulateList数组中的某一项，然后
var simulateItemKey = getItemKey(simulateItem, key);
因此 simulateItemKey值依次变为1， 2， 3; 先循环最外层的 新数据 2， 3，1，然后在循环内层 旧数据 1, 2 ,3, 
判断 itemKey === simulateItemKey 是否相等，相等的话 什么都不做， 执行下一次循环，j++; 否则的话，先判断是否在旧节点oldKeyIndex
能否找到新节点的值；oldKeyIndex 数据如下：
```
{
  1: 0, 
  2: 1,
  3: 2,
  4: 3,
  5: 4, 
  6: 5
}
```
如果没有找到该键名的话，说明该新节点数据项就是新增的，那就新增一项，新增的代码如下：
```
function insert(index, item) {
  var move = {index: index, item: item, type: 1};
  moves.push(move);
}
```
因此moves代码继续新增一项，type为1就是新增的。否则的话，获取simulateList中的下一个数据值，进行对比，如果能找到的话，执行remove(i)方法，因此moves再新加一项
{type:0, index: i}; 此时 j = 0; 删除原数组的第一项，然后继续循环上面一样的操作。
##### 整个思路重新整理一遍:
var before = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}];
var after = [{id: 4}, {id: 3}, {id: 2},{id: 1}];
var diffs = diff.diff(before, after, 'id');

上面的代码初始化，原数据 before， 新数据 after，key键为id，
oldMap 值为：
```
oldMap = {
  keyIndex: {
    1: 0,
    2: 1,
    3: 2,
    4: 3, 
    5: 4,
    6: 5
  }
}
```
newMap的值为
```
newMap = {
  keyIndex: {
    1: 3,
    2: 2,
    3: 1,
    4: 0
  }
}
```
```
oldKeyIndex = oldMap.keyIndex = {
  1: 0,
  2: 1,
  3: 2,
  4: 3, 
  5: 4,
  6: 5
}
var newKeyIndex = newMap.keyIndex = {
  1: 3,
  2: 2,
  3: 1,
  4: 0
};
```
遍历 before，获取某一项的值，因此分别为1，2，3，4，5，6；判断newKeyIndex是否有该值，如果没有的话，该它置为null，保存到 children数组里面去；
因此
```
children = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  null,
  null
]
```
把children赋值到 simulateList 数组里面去，然后对simulateList数组去掉null值，因此simulateList值变为如下：
```
simulateList = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4}
]
moves = [
  {
    type: 0,
    index: 4
  },
  {
    type: 0,
    index: 4
  }
]
```
最后遍历新节点 newList = [{id: 4}, {id: 3}, {id: 2},{id: 1}]; 获取该键值分别为：4, 3, 2, 1; 
获取源数组simulateList里面的键值为 1, 2 , 3, 4;

所以 4, 3, 2, 1 遍历 和 1, 2, 3, 4 遍历判断是否相等思路如下：
1. 遍历newList键值 为 4， 先和 1比较，如果相等的话，j++，跳到下一个内部循环，否则的话，先判断该键是否在oldKeyIndex里面，如果不存在的话，说明是新增的，否则的话就进入else语句，判断simulateList下一个值2 是否和 4 相等，不相等的话，直接插入值到数组的第一个位置上去，因此 moves的值变为如下：
```
moves = [
    {
      type: 0,
      index: 4
    },
    {
      type: 0,
      index: 4
    },
    {
      type: 1,
      index: 0,
      item: {id: 4}
    }
]
```
2. 同样的道理 ，把 遍历newList的第二项 3， 和第一步一样的操作，最后3也是新增的，如下moves的值变为如下：
```
moves = [
    {
      type: 0,
      index: 4
    },
    {
      type: 0,
      index: 4
    },
    {
      type: 1,
      index: 0,
      item: {id: 4}
    },
    {
      type: 1,
      index: 1,
      item: {id: 3}
    }
]
```
3. 同样，遍历newList的第三项值为2， 和第一步操作，进入else语句，第一个值不符合，接着遍历第二个值，相等，就做删除操作，因此moves变为如下值：
```
moves = [
    {
      type: 0,
      index: 4
    },
    {
      type: 0,
      index: 4
    },
    {
      type: 1,
      index: 0,
      item: {id: 4}
    },
    {
      type: 1,
      index: 1,
      item: {id: 3}
    },
    {
      type: 0,
      index: 2
    }
]
```
且 oldList被删除一项，此时j = 0, 所以被删除掉第一项 因此 oldList = [2, 3, 4];

4. 同样，遍历 newList的第四项值为 1， 和第一步操作一样，值都不相等，因此做插入操作，因此moves值变为
```
moves = [
    {
      type: 0,
      index: 4
    },
    {
      type: 0,
      index: 4
    },
    {
      type: 1,
      index: 0,
      item: {id: 4}
    },
    {
      type: 1,
      index: 1,
      item: {id: 3}
    },
    {
      type: 0,
      index: 2
    },
    {
      type: 1,
      index: 3,
      item: {id: 1}
    }
]
```
最后以对象的方式 返回 moves 和 children。