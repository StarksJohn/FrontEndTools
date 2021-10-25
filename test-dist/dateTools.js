"use strict";
exports.__esModule = true;
/**
 * https://www.cnblogs.com/carekee/articles/1678041.html
 */
var stringTools = require("./stringTools");
/**
 2个 date 对象 是否相等
 */
var isEqualDate = function (date1, date2) {
    var date1Data = getDateData(date1);
    var date2Data = getDateData(date2);
    return date1Data.y === date2Data.y && date1Data.m === date2Data.m && date1Data.d === date2Data.d;
};
/**
 得到日期 date 对象对应的 年月日时分秒 数据,补0
 */
var getDateData = function (date) {
    var now = date;
    var y = now.getFullYear(); // 年
    var m = now.getMonth() + 1; // 月
    var d = now.getDate(); // 日
    var h = now.getHours(); // 时
    var mm = now.getMinutes(); // 分
    var s = now.getSeconds(); // 秒
    return {
        y: y,
        m: m < 10 ? "0" + m : m,
        d: d < 10 ? "0" + d : d,
        h: h < 10 ? "0" + h : h,
        mm: mm < 10 ? "0" + mm : mm,
        s: s < 10 ? "0" + s : s
    };
};
/**
 得到日期 date 对象对应的 年月日时分秒 数据，不 补全0
 */
var getDateDataWithoutZero = function (date) {
    var now = date;
    var y = now.getFullYear(); // 年
    var m = now.getMonth() + 1; // 月
    var d = now.getDate(); // 日
    var h = now.getHours(); // 时
    var mm = now.getMinutes(); // 分
    var s = now.getSeconds(); // 秒
    return {
        y: y,
        m: m,
        d: d,
        h: h,
        mm: mm,
        s: s
    };
};
/**
 *比较 2个 getDateDataWithoutZero 返回的 对象的 大小,
 * @param one
 * @param two
 * true:one >two
 */
var compareTwoDateData = function (one, two) {
    return one.y >= two.y && one.m >= two.m && one.d >= two.d && one.h >= two.h && one.mm > two.mm && one.s > two.s;
};
/**
 * 得到时间戳对应的 年月日数据
 * @param timeStamp 毫秒
 * @returns {null}
 */
var getTimestampData = function (timeStamp) {
    if (timeStamp) {
        return getDateData(new Date(timeStamp));
    }
    else {
        return null;
    }
};
/**
 * @param {*} str :''
 */
var allocDate = function (str) {
    return new Date(str);
};
var curentTime = function () {
    var now = new Date();
    var y = now.getFullYear(); // 年
    var m = now.getMonth() + 1; // 月
    var d = now.getDate(); // 日
    var h = now.getHours(); // 时
    var mm = now.getMinutes(); // 分
    var s = now.getSeconds(); // 秒
    return {
        y: y,
        m: m,
        d: d,
        h: h,
        mm: mm,
        s: s
    };
};
// 获取当前时间的 时间戳
var curTimeStamp = function () {
    // console.log('new Date().getTime()=', new Date().getTime())
    // console.log('Date.parse(new Date().toString())=', Date.parse(new Date().toString()))
    // 这个方法
    //   和
    //   Date.parse(new Date().toString())
    //   拿到的
    //   毫秒相差
    //   一点
    // return new Date().getTime()
    return Date.parse(new Date().toString());
};
// 一天的 毫秒数
var dayTimeStamp = 24 * 60 * 60 * 1000;
/**
 获取当前日期的 前天、昨天、今天、明天、后天的 数据对象
 */
var addDayCount = function (AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1; // 获取当前月份的日期
    var d = dd.getDate();
    return {
        y: y,
        m: m,
        d: d
    };
};
/**
 求两个时间的天数差 参数 y,m,d 格式为 int 类型
 DateOne:{
  y,m,d
}
 */
var daysBetween = function (DateOne, DateTwo) {
    var clock = function (_a) {
        var y = _a.y, m = _a.m, d = _a.d;
        var res = y + '-';
        if (m > 10) {
            res += '0';
        }
        res += m + '-';
        if (d < 10) {
            res += '0';
        }
        res += d + ' ';
        return res;
    };
    var _DateOne = clock(DateOne);
    var _DateTwo = clock(DateTwo);
    var OneMonth = _DateOne.substring(5, _DateOne.lastIndexOf('-'));
    var OneDay = _DateOne.substring(_DateOne.length, _DateOne.lastIndexOf('-') + 1);
    var OneYear = _DateOne.substring(0, _DateOne.indexOf('-'));
    var TwoMonth = _DateTwo.substring(5, _DateTwo.lastIndexOf('-'));
    var TwoDay = _DateTwo.substring(_DateTwo.length, _DateTwo.lastIndexOf('-') + 1);
    var TwoYear = _DateTwo.substring(0, _DateTwo.indexOf('-'));
    var cha = (Date.parse(OneYear + '/' + OneMonth + '/' + OneDay) -
        Date.parse(TwoYear + '/' + TwoMonth + '/' + TwoDay)) /
        86400000;
    return Math.abs(cha);
};
/**
 str: xx-xx-xx 转成 对象
 */
var splitDateStrToOb = function (str) {
    if (!str) {
        return null;
    }
    var arr = str.split('-'); // 字符分割
    return {
        y: arr.length > 0 ? Number(arr[0]) : '',
        m: arr.length > 1 ? Number(arr[1]) : '',
        d: arr.length > 2 ? Number(arr[2]) : ''
    };
};
/**
 * 时间戳转成 "xxxx-xx-xx" 字符串
 */
var timeStampTo_xxxx_xx_xx = function (timeStamp) {
    var dateObj = getDateData(new Date(timeStamp));
    // console.log(
    //   'dateTools.js timeStampTo_xxxx_xx_xx timeStamp=',
    //   timeStamp,
    //   ' dateObj=',
    //   dateObj
    // )
    return dateObj.y + "-" + dateObj.m + "-" + dateObj.d;
};
// +---------------------------------------------------
// | 取得日期数据信息
// | 参数 type 表示数据类型
// |     y 年 m月 d日 w星期 ww周 h时 n分 s秒
// 如果 type==w,return 今天|明天|周一。。。周日
// +---------------------------------------------------
var datePart = function (type, myDate) {
    var partStr = '';
    var Week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    switch (type) {
        case 'y':
            partStr = myDate.getFullYear();
            break;
        case 'm':
            partStr = myDate.getMonth() + 1;
            break;
        case 'd':
            partStr = myDate.getDate();
            break;
        case 'w':
            partStr = Week[myDate.getDay()];
            break;
        case 'ww':
            partStr = myDate.WeekNumOfYear();
            break;
        case 'h':
            partStr = myDate.getHours();
            break;
        case 'n':
            partStr = myDate.getMinutes();
            break;
        case 's':
            partStr = myDate.getSeconds();
            break;
    }
    var now = new Date();
    if (isEqualDate(myDate, now)) {
        partStr = '今天';
    }
    var date1Data = getDateData(now);
    var date2Data = getDateData(myDate);
    if (daysBetween({
        y: date1Data.y, m: date1Data.m, d: date1Data.d
    }, {
        y: date2Data.y, m: date2Data.m, d: date2Data.d
    }) === 1) {
        partStr = '明天';
    }
    return partStr;
};
/**
 * 计算2个时间 相差的 时间
 * @param {*} startTime 可以为 毫秒级别的时间戳 | "2019-05-24 16:43:10"类型的时间字符串 等等
 * @param {*} endTime 同上
 */
var intervalTime = function (startTime, endTime) {
    var date1 = new Date(startTime); // 开始时间
    var date2 = new Date(endTime); // 结束时间
    var date3 = date2.getTime() - date1.getTime(); // 时间差的毫秒数
    // 计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000));
    // 计算出小时数
    var leave1 = date3 % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    // 计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    // 计算相差秒数
    var leave3 = leave2 % (60 * 1000); // 计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    return {
        d: days,
        h: hours,
        m: minutes,
        s: seconds,
        milliseconds: date3 // 相差的 毫秒时间戳
    };
};
/**
 * 一个毫秒时间戳 转成 是 xx 天 xx 时 xx 分 xx 秒
 * @param {*} timeStamp  毫秒时间戳
 */
var formatTimeStamp = function (timeStamp) {
    var days = parseInt("" + timeStamp / (1000 * 60 * 60 * 24));
    var hours = parseInt("" + (timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt("" + (timeStamp % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = parseInt("" + (timeStamp % (1000 * 60)) / 1000);
    return {
        d: days, h: hours, m: minutes, s: seconds
    };
};
// 计算 传入的 结束时间的 时间戳 和当前时间 相差的 时间数据
var getLeftStamp = function (endDateTimeStamp) {
    if (endDateTimeStamp === void 0) { endDateTimeStamp = 1562830622000; }
    // let endDateTimeStamp = Date.parse(new Date(endTimeStamp).toString()) //结束时间的 时间戳
    var nowDateTimeStamp = Date.parse(new Date().toString()); // 当前时间的 时间戳
    // console.log('endDateTimeStamp=', endDateTimeStamp, ' nowDateTimeStamp=', nowDateTimeStamp)
    var diff = (endDateTimeStamp - nowDateTimeStamp) / 1000;
    // console.log('剩余的时间=', diff)
    if (diff <= 0) {
        return null;
    }
    var timeLeft = {
        y: 0,
        d: 0,
        h: 0,
        m: 0,
        s: 0
    };
    if (diff >= (365.25 * 86400)) {
        timeLeft.y = Math.floor(diff / (365.25 * 86400));
        diff -= timeLeft.y * 365.25 * 86400;
    }
    if (diff >= 86400) {
        timeLeft.d = Math.floor(diff / 86400);
        diff -= timeLeft.d * 86400;
    }
    if (diff >= 3600) {
        timeLeft.h = Math.floor(diff / 3600);
        diff -= timeLeft.h * 3600;
    }
    if (diff >= 60) {
        timeLeft.m = Math.floor(diff / 60);
        diff -= timeLeft.m * 60;
    }
    timeLeft.s = diff;
    return timeLeft;
};
/**
 * 根据传进来的 时间数据和 分隔符，返回一个 时间字符串，如 xxxx.xx.xx ,月和日都是 自动前边补0
 */
var formatDateObjToString = function (_a) {
    var y = _a.y, m = _a.m, d = _a.d, str = _a.str;
    if (!y || !m || !d) {
        return null;
    }
    if (typeof m === 'string') {
        m = Number(m);
    }
    if (typeof d === 'string') {
        d = Number(d);
    }
    var mm = m;
    if (m < 10) {
        mm = "0" + m;
    }
    var dd = d;
    if (d < 10) {
        dd = "0" + d;
    }
    return "" + y + str + ("" + mm) + str + ("" + dd);
};
/**
 * 毫秒转成 xx:xx:xx (小时:分:秒)
 * @param msd
 * @returns {string}
 */
var millisecondToDate = function (msd) {
    var time = parseFloat(msd) / 1000; // 秒
    if (time != null) {
        if (time > 60 && time < 60 * 60) { // 1分-1小时
            var min = parseInt("" + time / 60.0); // 分
            if (min < 10) {
                min = "0" + min;
            }
            var s = parseInt("" + (parseFloat("" + time / 60.0) -
                parseInt("" + time / 60.0)) * 60);
            if (s < 10) {
                s = "0" + s;
            }
            time = min + ':' + s;
        }
        else if (time >= 60 * 60 && time < 60 * 60 * 24) { // 1小时-1天
            var h = parseInt("" + time / 3600.0); // 小时
            if (h < 10) {
                h = "0" + h;
            }
            var min = parseInt("" + (parseFloat("" + time / 3600.0) -
                parseInt("" + time / 3600.0)) * 60); // 分
            if (min < 10) {
                min = "0" + min;
            }
            // 秒
            var s = parseInt("" + (parseFloat("" + (parseFloat("" + time / 3600.0) - parseInt("" + time / 3600.0)) * 60) -
                parseInt("" + (parseFloat("" + time / 3600.0) - parseInt("" + time / 3600.0)) * 60)) * 60);
            if (s < 10) {
                s = "0" + s;
            }
            time = h + ':' + min + ':' + s;
        }
        else { // <1分
            if (time < 10) {
                time = "00:0" + parseInt("" + time);
            }
            else {
                time = "00:" + parseInt("" + time);
            }
        }
    }
    return time;
};
/**
 * 时间显示格式化
 * @param timestamp
 * @returns {string}
 */
var timeFormat = function (timestamp) {
    var current = new Date().getTime();
    var diffTime = current - timestamp;
    var timeSecond = parseInt("" + diffTime / 1000);
    var timeMinute = parseInt("" + timeSecond / 60);
    var timeHour = parseInt("" + timeMinute / 60);
    var timeDay = parseInt("" + timeHour / 24);
    var timeMonth = parseInt("" + timeDay / 30);
    var timeYear = parseInt("" + timeMonth / 12);
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    var day = date.getDate();
    day = day < 10 ? "0" + day : day;
    var h = date.getHours().toString();
    var m = date.getMinutes().toString();
    var s = date.getSeconds().toString();
    h = h.length === 1 ? '0' + h : h;
    m = m.length === 1 ? '0' + m : m;
    s = s.length === 1 ? '0' + s : s;
    if (timeYear >= 1) { // 大于一年
        return year + '-' + month + '-' + day;
    }
    else if (timeMonth >= 1) { // 大于一个月
        return month + '-' + day + ' ' + h + ':' + m;
    }
    else if (timeDay >= 1) { // 大于一天
        return month + '-' + day + ' ' + h + ':' + m;
    }
    else if (timeHour >= 1) {
        return timeHour + "\u5C0F\u65F6\u524D";
    }
    else if (timeMinute >= 1) {
        return timeMinute + "\u5206\u949F\u524D";
    }
    else {
        return '刚刚';
    }
};
/**
 * 把  https://github.com/OvalMoney/react-native-fitness  库返回的 时间 字符串(2020-11-05T02:00:00Z)转成 接口需要的 时间字符串 (2020-08-21 09:00:00)
 * https://www.cnblogs.com/sanyekui/p/13204062.html
 * need_h_mm_s 是否需要 时分秒
 * @type {string}
 */
var formatFitnessDateStrToApiDateStr = function (str, need_h_mm_s) {
    if (need_h_mm_s === void 0) { need_h_mm_s = true; }
    if (stringTools.isNull(str)) {
        // console.log('dateTools.js formatFitnessDateStrToApiDateStr str=null')
        return '';
    }
    // 数字补0操作
    var addZero = function (num) {
        return num < 10 ? '0' + num : num;
    };
    var arr = str.split('T');
    var d = arr[0];
    var darr = d.split('-');
    var t = arr[1];
    var tarr = t.split('.000');
    var marr = tarr[0].split(':');
    var dd = parseInt(darr[0]) +
        '-' +
        addZero(parseInt(darr[1])) +
        '-' +
        addZero(parseInt(darr[2]));
    if (need_h_mm_s) {
        dd +=
            ' ' +
                addZero(parseInt(marr[0])) +
                ':' +
                addZero(parseInt(marr[1])) +
                ':' +
                addZero(parseInt(marr[2]));
    }
    // console.log('formatFitnessDateStrToDate dd=', dd)
    return dd;
};
/**
 * Date 对象转成 "Wed Sep 02 2020" 格式对象
 * @param date
 * @returns {string}
 */
var formatTo_enDate = function (date) {
    var arr = date.toDateString().split(' ');
    return {
        en_day_of_the_week: arr[0],
        en_month: arr[1],
        day: arr[2],
        y: arr[3]
    };
};
/**
 * Convert the string with the date format '2018-09-10 08:00:00' into a Date object
 */
var convert_xxxx_xx_xx_toDate = function (str) {
    if (!str) {
        return new Date();
    }
    var _str = str;
    _str = _str.replace(/-/g, '/');
    return new Date(_str);
};
/**
 * 'xxx-xx-xx' to timestamp
 */
var xxxx_xx_xx_to_timestamp = function (xxxx_xx_xx) {
    var date = convert_xxxx_xx_xx_toDate(xxxx_xx_xx);
    var timestamp = date.getTime();
    // console.log(
    //   'dateTools.js xxxx_xx_xx_to_timestamp xxxx_xx_xx=',
    //   xxxx_xx_xx,
    //   ' timestamp=',
    //   timestamp
    // )
    return timestamp;
};
/**
 * https://blog.csdn.net/pengpengzhou/article/details/104774480
 * How many timestamp does the UTC time differ from the current time zone
 * @returns {number}
 * @constructor
 */
var UTC_local_offset = function () {
    var minutes = new Date().getTimezoneOffset();
    var timeStamp = minutes * 60 * 1000;
    // console.log('dateTools.js UTC - local offset(timeStamp):' + timeStamp)
    return timeStamp * -1;
};
var englishAbbreviationOfDayOfTheWeek = [
    {
        name: 'Mon',
        steps: 0
    },
    {
        name: 'Tue',
        steps: 0
    },
    {
        name: 'Wed',
        steps: 0
    },
    {
        name: 'Thu',
        steps: 0
    },
    {
        name: 'Fri',
        steps: 0
    },
    {
        name: 'Sat',
        steps: 0
    },
    {
        name: 'Sun',
        steps: 0
    }
];
/**
 * monday:{y: xxxx, m: xx, d: xx}
 * sunday:{y: xxxx, m: xx, d: xx}
 */
var getMondayAndSunday = function () {
    var day = new Date().getDay();
    // console.log('dateTools.js day=', day)
    var monday = dateTools.addDayCount((day - 1) * -1);
    // console.log('dateTools.js monday=', monday)
    var sunday = dateTools.addDayCount(7 - day);
    // console.log('dateTools.js sunday=', sunday)
    return {
        monday: monday,
        sunday: sunday
    };
};
/**
 *  [0-6]correspond['日', '一', '二', '三', '四', '五', '六'] According to local time, return the day of the week in a specific date, 0  means Sunday
 */
var getDay = function () {
    var day = new Date().getDay();
    // console.log('dateTools.js getDay day=', day)
    return day;
};
var english_month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
// 现在 外部声明，这些方法 才能互相调用
var dateTools = {
    isEqualDate: isEqualDate,
    getTimestampData: getTimestampData,
    timeFormat: timeFormat,
    getDateData: getDateData,
    formatDateObjToString: formatDateObjToString,
    curentTime: curentTime,
    millisecondToDate: millisecondToDate,
    addDayCount: addDayCount,
    curTimeStamp: curTimeStamp,
    daysBetween: daysBetween,
    getDateDataWithoutZero: getDateDataWithoutZero,
    splitDateStrToOb: splitDateStrToOb,
    compareTwoDateData: compareTwoDateData,
    datePart: datePart,
    allocDate: allocDate,
    dayTimeStamp: dayTimeStamp,
    intervalTime: intervalTime,
    formatTimeStamp: formatTimeStamp,
    getLeftStamp: getLeftStamp,
    timeStampTo_xxxx_xx_xx: timeStampTo_xxxx_xx_xx,
    formatFitnessDateStrToApiDateStr: formatFitnessDateStrToApiDateStr,
    formatTo_enDate: formatTo_enDate,
    convert_xxxx_xx_xx_toDate: convert_xxxx_xx_xx_toDate,
    xxxx_xx_xx_to_timestamp: xxxx_xx_xx_to_timestamp,
    UTC_local_offset: UTC_local_offset,
    getMondayAndSunday: getMondayAndSunday,
    getDay: getDay,
    englishAbbreviationOfDayOfTheWeek: englishAbbreviationOfDayOfTheWeek
};
exports["default"] = dateTools;
