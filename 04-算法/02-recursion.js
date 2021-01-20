// 递归和递归表达式
// 递归性能的思考
// 前端相关递归算法精选 Dom的绝对位置 深度拷贝 深度比较
// 树和递归  树的定义 前端的应用场景  树的递归定义
// 树的遍历 树的查找  树的路径 css选择器 最长相同节点路径问题
// 全排列 一般解法 基于交换的解法 heap的方法
// 数组相邻最大和问题 一种暴力的解法



// n! = n * (n-1)! 0! = 1
function factorial(n) {
  return n === 0 ? 1 : factorial(n - 1) * n
}

/** 斐波那契数列递表达式
 * fn(n) = {
 * 1, n = 1
 * 1, n = 2
 * f(n-1)+f(n-2), n>2
 * }
 */
// 1 1 2 3 5 8 13 21 34 55 89 144 ...

// 算法复杂度太高 
function fibonacci(n) {
  return n == 1 || n == 2 ? 1 :
    fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacci(n) {
  let [a, b] = [0, 1]
  for(let i = 0; i<n; i++) {
    [a, b] = [b, a+b]
  }
  return b
}

function fibonacci(n) {
  return Array(n).fill()
    .reduce( ([a, b], _) => {
      return [b, a+b]
    }, [0, 1]) [1]
}

// dom节点的绝对位置
function get_layout(ele) {
  const layout = {
    width: ele.offsetWidth,
    height: ele.offsetHeight,
    left: ele.offsetLeft,
    top: ele.offsetTop
  }
  if(ele.offsetParent) {
    const parentLayout = get_layout(ele.offsetParent)
    layout.left += parentLayout.left
    layout.top += parentLayout.top
  }
  return layout
}

// 深拷贝
function clone(obj) {
  if(obj == null || typeof obj !== 'object') return obj
  const newObj = new obj.constructor()
  for(let key in Object.getOwnPropertyDescriptors(obj)) {
    newObj[key] = clone(obj[key])
  }
  return newObj
}

// 深度比较
function deepCompare(a, b) {
  if(a === null || typeof a !== 'object' || b === null || typeof b !== 'object') {
    return a === b
  }
  const propsA = Object.getOwnPropertyDescriptors(a)
  const propsB = Object.getOwnPropertyDescriptors(b)
  if(Object.keys(propsA).length !== Object.keys(propsB).length) {
    return false
  }
  return Object.keys(propsA).every(
    key => deepCompare(a[key], b[key])
  )
}

// 尝试写个选择器
// 树的算法和前端
// DOM
// 选择器
// JSON
// 虚拟DOM(react, Vue, AngularJS)
// 文本查找和输入提示

// 树的递归表示
// T: v, [T1, ..., Tk]数含有值v和一个子树的列表


// 构造一个先序遍历 除了返回节点外 还返回路径
function* tree_tranverse(tree, path = []) {
  yield { tree, path }
  if(tree.children) {
    for(let i = 0; i< tree.children.length; i++) {
      yield * tree_tranverse(tree.children[i], [...path, i])
    }
  }
}
// 可以通过上诉遍历函数查询一个节点的路径
function find_path(v) {
  for(let { tree, path } of tree_tranverse(v)) {
    if(tree.v === v) {
      return path
    }
  }
}
