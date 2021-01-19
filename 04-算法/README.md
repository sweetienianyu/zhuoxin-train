#### 资深工程师能力三大维度 管理能力 架构能力 程序能力
#### 感受一下算法难度 
- 初中级 排序递归
- 资深 全排列 八皇后 动态规划
- 专家 图的同构

学算法锻炼思维能力 写程序写的比别人快而且效率高

#### 举个例子 数组展平 语言最基本小技巧
```
arr = [[1, 2], [3, 4]]
[].concat([1, 2], [3, 4])
[].concat(...[[1, 2], [3, 4]])
[].apply(null, [[1, 2], [3, 4]])
```

#### 一星难度 多维数组展平 对数组S = {a1, a2, ...an} 函数F将数组展平 这时候就要用科学的方式进行思考了 找到递归表达式
#### F(S) = F(a1) U F(a2) U ... U F(an)
#### F(ai) = ai & f(ai)
```
function flatten(arr) {
  return [].concat(
    ...arr.map(x => Array.isArray(x) ? flatten(x) : x)
  )
}
```
#### 函数节流 一星难度
document.addEventListener('scroll', throttle(console.log)) 过滤重复的滚动事件

这个问题应该如何去思考？ 用时序图的方式去思考。 用别的方式思考你可能得到正确的答案，但是思维方式不科学

```
  ---1-2-3-4-5--7-8-9----
  ---1----------7--------
     |   60ms    | 60ms  |

function throttle(func, delay = 60) {
  let lock = false
  return (...args) => {
    if(lock) {return}
    func(...args)
    lock = true
    setTimeout(() => {lock = false}, delay)
  }
}

过滤掉重复的验证事件 用户输入停止后300ms触发验证
---1--2--3-------4---5---6--------
-------------3---------------6----
        |300ms|         |300ms|

function throttle(func, delay = 300, I = null) {
  return (...args)=> {
    clearInterval(I)
    I = setTimeout(func.bind(null, ...args), delay)
  }
}

```


#### 二星难度 柯理化

对于curry(foo) g函数参数足够4个 就调用foo(a,b,c,d) 如果小与4个就返回一个可以继续积累参数的函数

```
const foo = curry((a, b, c, d) => {
  console.log(a, b, c, d)
})

foo(1)(2)(3)(4) // 1 2 3 4
foo(1)(2)(3) //不返回
const f = foo(1)(2)(3)
f(5) // 1 2 3 5


const curry = func => {
  const g = (...allArgs)=>allArgs.length >= func.length ?
    func(...allArgs)
      : (...args) => g(...allArgs, ...args)
  return g
}
```

#### 三星 一般牵扯到一些前置知识 Y-组合子 
有没有可能去掉consg g？
```
// lambda演算
const y = function(le) {
  return function(f) {
    return f(f)
  }(function(f) {
    return le(
      function(...x) {
        return (f(f))(...x)
      }
    )
  })
}

const curryY = func => y(
  g => {
    (...allArgs) => {
      allArgs.length >= func.length ? 
        func(...allArgs)
        : (...args) => g(...allArgs, ...args)
    }
  }
)

const foo = curryY ((a, b, c, d) => {
  console.log(a, b, c, d)
})

foo(1, 2, 3, 4)
```

4星 树的编辑距离 (DOM DIFF)
将dom抽象成一颗标签树
```
<div>
  <p>hello</p>
  <div>
    <span>world</span>
  </div>
</div>
```


#### 算法对职业生涯的意义
- 工作机会 面试通过率
- 工作效率 
- 语言跨度 
- 保值