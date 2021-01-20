
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


insert
