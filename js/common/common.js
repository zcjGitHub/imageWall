function getUrlQuery(name) {
    var params = {};
    var arr = window.location.search.substr(1).split('&');
    for (var i = 0; i < arr.length; i++) {
        params[arr[i].split("=")[0].toLowerCase()] = arr[i].split("=")[1];
    }

    // 利用惰性函数避免每次都重新生成params对象
    getUrlQuery = function(name) {
        return params[name.toLowerCase()] || "";
    }
    return params[name.toLowerCase()] || "";
};

function storage(key, value) {
    var foo = window.localStorage;

    try {
        localStorage.setItem("isSupportLocalStorage", true);
        localStorage.getItem("isSupportLocalStorage");
        localStorage.removeItem("isSupportLocalStorage");
    } catch(err) {
        foo = cookie;
    }

    if (value === undefined) {
        return foo.getItem(key);
    } else {
        foo.setItem(key, value, Infinity);
    }
}

//根据日期判断生效天数
function lastDays(date){
    var joinDate = new Date(date.substring(0,10));
    var now = new Date();
    var diff = now.valueOf() - joinDate.valueOf();
    var diffDay = parseInt(diff/(1000*60*60*24));
    return (180 - diffDay);
}

//根据传来的日期（"2016-08-05 23:13:32.0"）改成（2016年08月05日）类型
function date(date){
    var dateStr = date.substring(0,10);
    var dateArr = dateStr.split('-');
    return dateArr[0] + '年' + dateArr[1] + '月' + dateArr[2] + '日';
}