/**
 * Created by wuzhongle practice 2018/04/23
 */
// 判断是否是数组，并返回boolean值
function isArray(arr) {
    return arr === "object" && Object.prototype.toString().call(arr) === "[object Array]"
}