"use strict";
exports.__esModule = true;
exports["default"] = {
    /**
     * https://www.cnblogs.com/chrissong/p/10841760.html
     * 避免 try catch  后去 err
     * @param promise
     * @returns {*|Promise<T | any[]>}
     */
    to: function (promise) {
        return promise
            .then(function (res) {
            return [null, res];
        })["catch"](function (err) {
            return [err];
        });
    },
    /**
     * 图片网络链接 ios补全 https，安卓可用http
     * @param imgUrl
     * @param p
     * @returns {*}
     */
    uri: function (imgUrl, p) {
        if (imgUrl === void 0) { imgUrl = ''; }
        if (p === void 0) { p = 'ios'; }
        // @ts-ignore
        if (p === 'ios' && imgUrl.startsWith('http:')) {
            imgUrl = imgUrl.replace(/http/, 'https');
        }
        return imgUrl;
    },
    // 换算显示的 xxx 万
    tenThousandConversion: function (n, unitStr /* 超过10000后最后显示的单位 */) {
        if (n >= 10000) {
            n = Math.round((n / 10000) * 100) / 100;
            n = n + unitStr;
        }
        return n;
    },
    /**
     *
     * @param old
     * @param now
     * @param keys :比较全部属性: Object.keys(old) 或  比较某个属性 :['memberList']
     * @returns {boolean}
     */
    shouldUpdate: function (old, now, keys) {
        var isEmpty = function (object) {
            if (object === null) {
                return true;
            }
            else {
                switch (typeof object) {
                    case 'undefined': {
                        return true;
                    }
                    case 'string': {
                        return object === '';
                    }
                    case 'object': {
                        for (var key in object) {
                            return false;
                        }
                        return true;
                    }
                    default: {
                        return false;
                    }
                }
            }
        };
        if (!isEmpty(keys)) {
            for (var i in keys) {
                var key = keys[i];
                var oldValue = old[key];
                var nowValue = now[key];
                if (typeof oldValue !== 'function' && typeof nowValue !== 'function') {
                    try {
                        if (JSON.stringify(oldValue) !== JSON.stringify(nowValue)) {
                            return true;
                        }
                    }
                    catch (e) { }
                }
            }
        }
        return false;
    }
};
