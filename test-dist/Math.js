"use strict";
/**
 * Created by Ebates on 16/12/28.
 * Math
 * 计算相关
 */
exports.__esModule = true;
exports.isInteger = exports.numberOfDigitsPerDigit = exports.isDot = exports.strToNum = exports.noRounding = exports.KeepDigitsDecimalPlaces = exports.randomNums = void 0;
/**
 * 生成 [min,max] 的随机数 http://www.cnblogs.com/javaScriptYang/p/5684797.html
 * @param min
 * @param max
 */
function randomNums(min, max) {
    // let a= parseInt(Math.random()*(max-min+1)+min,10);
    //  Log.log('a==='+a);
    var b = Math.floor(Math.random() * (max - min + 1) + min);
    // Log.log('b===' + b);
    // showToast('产生新随机数===' + b);
    return b;
}
exports.randomNums = randomNums;
/**
 * 把 nums 数字 改成 小数点右边保留 digit 位小数 && 四舍五入
 * @param nums  原生数字
 * @param digit 小数点右边需要 保留几位
 * @constructor
 */
function KeepDigitsDecimalPlaces(nums, digit) {
    return nums.toFixed(digit);
}
exports.KeepDigitsDecimalPlaces = KeepDigitsDecimalPlaces;
/**
 * 把 nums 数字 改成 小数点右边保留 digit 位小数 && 不四舍五入小数点2位右边的
 * @param nu
 */
function noRounding(num, digit) {
    // @ts-ignore
    var res = (parseInt(num * 100) / 100).toFixed(digit);
    // console.log('noRounding num=', num, ' digit=', digit, ' res=', res)
    return res;
}
exports.noRounding = noRounding;
/**
 * 计算 绝对值, 不知道为啥外部 调用就报错
 * @param value
 * @returns {number}
 * @constructor
 */
// export function AbsoluteValue(value) {
//     return Math.abs(value)
// }
/**
 * 字符串转 number && 丢弃小数部分,保留整数部分  http://www.jb51.net/article/59240.htm
 * @param str
 * @returns {*}
 */
function strToNum(str) {
    return parseInt(str);
}
exports.strToNum = strToNum;
/**
 * 返回 一个数字 被 小数点 切割后的 数组，可判断是否 有 小数点
 * @param num
 */
function isDot(num) {
    return (num.toString()).split('.');
}
exports.isDot = isDot;
/**
 * 分解出一个 xxx.x 数字的 小数位,个位,十位,百位
 */
function numberOfDigitsPerDigit(num) {
    var decimals = 0; // 小数位
    var singleDigits = 0; // 个位数
    var tensDigit = 0; // 十位数
    var hundredsDigit = 0; // 百位数
    var str = num.toString();
    var arr = str.split('.');
    decimals = arr[1] || 0;
    singleDigits = arr[0].substring(arr[0].length - 1, arr[0].length);
    if (arr[0].length > 1) {
        tensDigit = arr[0].substring(arr[0].length - 2, arr[0].length - 1);
    }
    if (arr[0].length > 2) {
        hundredsDigit = arr[0].substring(arr[0].length - 3, arr[0].length - 2);
    }
    // console.log(
    //   'mathTools.js numberOfDigitsPerDigit decimals=',
    //   decimals,
    //   ' singleDigits=',
    //   singleDigits,
    //   ' tensDigit=',
    //   tensDigit,
    //   ' hundredsDigit=',
    //   hundredsDigit
    // )
    return {
        hundredsDigit: hundredsDigit,
        tensDigit: tensDigit,
        singleDigits: singleDigits,
        decimals: decimals
    };
}
exports.numberOfDigitsPerDigit = numberOfDigitsPerDigit;
function isInteger(num) {
    var res = /(^[1-9]\d*$)/.test("" + num);
    // console.log('mathTools.js isInteger ', num, '是否是整数=', res)
    return res;
}
exports.isInteger = isInteger;
