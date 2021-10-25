"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
// 删除 obj对象里的 和 keys 数组 里 同名的 属性, 生成新的  对象
var omit = function (obj, keys) {
    return Object.keys(obj)
        .reduce(function (result, key) {
        // @ts-ignore
        if (!typeof keys !== 'string' || (keys === null || keys === void 0 ? void 0 : keys.includes(key))) {
            // @ts-ignore
            result[key] = obj[key];
        }
        return result;
    }, {});
};
/**
 * 深度合并2个对象的所有属性，obj2里比 obj1 里多的属性 不会 被合并到 新对象里，和 {...obj1,...obj2} 不一样，具体看 https://segmentfault.com/q/1010000008815500
 * @param obj1
 * @param obj2
 * @returns {*}
 * @constructor
 */
var DeepMergeNoExtraProps = function (obj1, obj2) {
    if (Object.prototype.toString.call(obj1) === '[object Object]' && Object.prototype.toString.call(obj2) === '[object Object]') {
        for (var prop2 in obj2) { // obj1无值,都有取obj2
            // @ts-ignore
            if (!obj1[prop2]) { // obj1 里没有 obj2.prop2 属性
                // obj1[prop2] = obj2[prop2];
            }
            else { // 递归赋值
                // obj1[prop2] = DeepMerge(obj1[prop2], obj2[prop2])
            }
        }
    }
    else if (Object.prototype.toString.call(obj1) === '[object Array]' && Object.prototype.toString.call(obj2) === '[object Array]') {
        // 两个都是数组，进行合并
        obj1 = obj1.concat(obj2);
    }
    else { // 其他情况，取obj2的值
        obj1 = obj2;
    }
    return obj1;
};
/**
 * 对象深拷贝 https://www.cnblogs.com/renbo/p/9563050.html
 * @param obj
 * @returns {[]}
 */
var deepCopy = function (obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                // @ts-ignore
                result[key] = deepCopy(obj[key]); // 递归复制
            }
            else {
                // @ts-ignore
                result[key] = obj[key];
            }
        }
    }
    return result;
};
var isEmpty = function (value) {
    if (lodash_1["default"].isNumber(value) || lodash_1["default"].isBoolean(value)) {
        return false;
    }
    if (lodash_1["default"].isNil(value)) {
        return true;
    }
    if (lodash_1["default"].isString(value)) {
        return value.length === 0;
    }
    return lodash_1["default"].isEmpty(value);
};
var isNotEmpty = function (value) {
    return !isEmpty(value);
};
exports["default"] = {
    omit: omit,
    DeepMergeNoExtraProps: DeepMergeNoExtraProps,
    deepCopy: deepCopy,
    isEmpty: isEmpty,
    isNotEmpty: isNotEmpty
};
