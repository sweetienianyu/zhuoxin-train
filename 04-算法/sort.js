
function bsearch(A, x) {
  let l = 0,//查询范围左边界
      r = A.length - 1,//查询范围右边界
      guess; // 猜测位置

  while(l <= r) {
    guess = Math.floor( (l + r) / 2)
    // 循环不变式
    // guess 等于l, r中间的位置
    // l:新查找范围左 r:新查找范围右
    if(guess === x) return guess
    else if (A[guess] > x) r = guess - 1
    else l = guess + 1
    //循环不变式
    // l新查找范围左 r新查找范围右
    return -1
  }
}

const A = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]
console.log(bsearch(A, 88))
console.log(bsearch(A, 68))


// 插入排序
const A = [2, 4, 7, 9, 13] //原数组
const x = 8 // 需要插入的元素
const b = A.find(a => a > x) //b代表第一个大于x的数字
// b===undifined 代表所有元素都比8小
if( b === undifined) {
  A.push(x)
}else {
  const idx = A.indexOf(b)
  A.splice(idx, 0, x)
}


function insert(A, x) {
  // p 指向下一个需要比较的元素
  // p+1 指向空位
  let p = A.length - 1
  while( p >= 0 && A[p] > x) {
    A[p+1] = A[p]
    p--
  }
  A[p + 1] = x
}
const A1 = [2, 4, 7, 9, 13] //原数组
const x1 = 8 //原数组
insert(A1, x1)

function insert(A, i , x) {
  let p = i - 1
  while(p>= 0&&A[p]>x) {
    A[p+1] = A[p]
    p--
  }
  A[p+1] = x
}
function insertion_sort(A) {
  for(let i = 0; i<A.length; i++) {
    insert(A, i, A[i])
  }
}


// 冒泡排序
// 写算法首先做抽象
// function bubble_sort(A)
// A: 需要排序的数组
// 返回： 无

function swap(A, i, j) {
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}
function bubble_sort(A) {
  for(let i = A.length - 1; i>= 1; i--) {
    for(let j = 1; i<=i; j++) {
      A[j-1] > A[j] && swap(A, j-1, j)
      // 循环结束j指向A[0]-A[j]中最大值
    }
    // 循环结束A[i]-A[n-1]已排序
  }
}
const A = [5, 8, 1, 2, 4, 6, 3]
bubble_sort(A)