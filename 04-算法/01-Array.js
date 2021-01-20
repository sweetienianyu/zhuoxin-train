// 子数组和整除
// 写一个函数 给定一个数组 判断数组中某一项 或者任意多项的和 是否被另一个整数整除
// solve([3, 5,  8], 13) true 
// solve([3, 9], 15) false
// solve([7, 8, 2], 7) true
// solve(1[1, 2, 3], 6) true

// 比较笨的一个做法 但是比较好写 比较暴力
function solve(arr, N) {
  const s = new Set()
  for(let i = 0; i<= arr.length; i++) {
    for(let j = i+1; j<=arr.length; j++) {
      const remain = arr.slice(i, j).reduce((x, y) => x+y, 0) % N
      s.add(remain)
    }
  }
  return s.has(0)
}

// 从算法角度思考问题 应该是这样 首先做抽象 
// 给定数组 先求出一个余数集。余数集合中有0

// 子问题结构
// 数组a1 , a2, ..., an 对于数字N的子数组和余数集合定义为Sn = {S1, S2, S3, ..., Sm}
// 比如[1, 2, 3]的S3 = {1, ,2 ,3, 4, 5, 6} S2 = {1, 2, 3}
// Sk和SK-1存在子问题关系

// Sk-1有p项 Sk = Sk-1 U ak % N U {1 <= i <= p | (si + ak) % N}
// N = 6 S2 = [1, 2, 3] S3 = [1, 2, 3] U [4, 5, 6]


// 分组
const studentsInGroups = students.reduce(
  (groups, student) => {
    groups[student.group_id] = 
      [...student(groups[student.group_id] || []), student]
      return groups
  },
  {}
)

// 联合
const studentsWithGroupInfo = students.map(student => {
  const group = groups.find(g => g.id === student.group_id)
  return {
    ...student,
    groupName: group.name
  }
})

// 扩展一些ramda library对数组的扩展
// ramda源码类型签名比较不好读 <b>纯</b>函数式编程领域
// zip 两两对齐
// flatten 展平
// converge 汇聚
// innerJoin 联合
// intersperse 间隔插入
// groupBy 分组成对象
// groupWith 分组成数组


// 生成器构造无穷斐波那契数列
function* fibonacci() {
  let a = 1;
  let b = 1;
  while(true) {
    const t = b;
    b = a + b;
    a = t;
    yield b
  }
}

const it = fibonacci()
const feb10 = Array.from(Array(10), it.next, it).map(x => x.value)
console.log(feb10)


// 数组展平的生成器实现
function* flatten(arr) {
  for(let i = 0; i<arr.length; i++) {
    if(Array.isArray(arr[i])) {
      yield * flatten(arr[i])
    }else {
      yield arr[i]
    }
  }
}

console.log([...flatten([1, 2, [3, 4, [[5]]]])])
// [1, 2, 3, 4, 5]

// 生成器异步语法
function request(url) {
  return cb => {
    setTimeout(() => {
      cb(Math.random())
    }, 1000)
  }
}

create_runner(function* () {
  const val1 = yield request('some url')
  const val2 = yield request('some url')
  console.log(val1, val2)
}) ()


// 补充问题

// 笛卡尔积
// [1, 2] * ['a', 'b'] = [ [1, 'a'], [1, 'b'], [2, 'a'], [2, 'b'] ] 
function cartesian_product(...Martrix) {
  if(Martrix.length === 0) return []
  if(Martrix.length === 1) return Martrix[0]
  return Martrix.reduce((A, B) => {
    const product = []
    for(let i = 0; i<A.length; i++) {
      for(let j = 0; j<B.length; j++) {
        product.push(
          Array.isArray(A[i]) ?
            [...A[i], B[j]] : [A[i], B[j]]
        )
      }
    }
    return product
  })
}

// 中文排序
['王成成', '王峰', '蒋雪', '李明'].soft((a, b) => a.localCompare(b, 'zh'))
