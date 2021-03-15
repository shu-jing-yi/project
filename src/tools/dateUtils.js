// 时间表
export function fromateDate(time) {
  if (!time) return ''
  let date = new Date(time)
  // let Y = date.getFullYear();
  // let M = date.getMonth() + 1;
  // let D = date.getDate();
  // var h = date.getHours()
  // if (h < 10) {
  //   let h = '0' + date.getHours()
  // }
  // var m = date.getMinutes();
  // if (m < 10) {
  //   let m = '0' + date.getHours()
  //   console.log(m)
  // }

  // let s = date.getSeconds();
  // if (h < 10) {
  //   return (Y + '-' + M + '-' + D + '---' + h + ':' + m + ':' + s)
  // }
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}