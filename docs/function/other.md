## 限制 || 转化类函数


**小数整数位数限制**

接受一个Number浮点类型，第二个参数是Number的整数部分位数限制，第三个参数是Number的小数部分位数限制

返回布尔值，如果传入的数值符合整数小于位数之内，则返回true，否则返回false

``` js
decimalsLength(val, begin, end) {
    let reg = new RegExp(`^(\\d{0,${begin}})(\\.(\\d{0,${end}}))?$`, 'g')
    let result = true
    if (!reg.test(val)) result = false
    return result
}
```


**整数位数限制, 不能输入小数**
``` js
integerLength(val, length) {
    let reg = new RegExp(`^(\\d{0,${length}})$`)
    let result = true
    if (!reg.test(val)) result = false
    return result
}
```

**url地址确保添加http或者https头部**

``` js
doUrlHttp(url) {
    if (url.substr(0, 7).toLowerCase() == 'http://' || url.substr(0, 8).toLowerCase() == 'https://') {
        url = url
    } else {
        url = 'https://' + url
    }
    return url
}
```

**将日期格式转变成年月日**

``` js
formatDate(source) {
    let date = new Date(source);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
}
```

**验证文件名是否有特殊字符**

``` js
validateFileName(value) {
    var pattern = new RegExp('[#$^&*()=|,\\[\\]./?~！@#￥……&*——|【】？]')
    if (pattern.test(value)) {
        return true
    }
    return false
}
```

**清除字符串所有的空格**

``` js
allTrim(val) {
    if (typeof (val) !== 'string') {
        return val
    }
    return val.replace(/\s/g, '')
}
```

**debounce函数, 节流**
``` js
debounce(fn, delay = 800) {
    if (typeof fn !== 'function') return
    let timer
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}
```

**分钟转化为时分**

``` js
formatSeconds(value) {
    let dayNum = (value / 60 / 24).toString()
    let endDay = dayNum.split('.')
    let day = endDay[0]
    let hour = parseInt(value / 60 % 24)
    let min = parseInt(value % 60)
    let endTime
    if (day > 0) {
        endTime = day + '天'
    }
    if (hour > 0) {
        if (day > 0) {
            endTime += hour + '小时'
        } else {
            endTime = hour + '小时'
        }
    }
    if (min > 0) {
        endTime += parseFloat(min) + '分'
    }
    return endTime
}
```

**格式化时间，转变成年月日时分秒**

``` js
formatTime(date, symbol = "-") {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const formatNumber = (n) => {
        n = n.toString()
        return n[1] ? n : '0' + n
    }
    return [year, month, day].map(formatNumber).join(symbol) + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
```

**测试手机号码是否正确的正则**

``` js
testPhoneNumber(n) {
    if (!(/^1[3456789]\d{9}$/.test(n))) {
        return false;
    } else {
        return true;
    }
}
```


**小时转天数**

``` js
hourInDay(n) {
  if (n <= 0 || !n) {
    return 0 + '小时'
  }
  if (n > 24) {
    if (n % 24) {
      const day = n / 24;
      const hours = n % 24;
      return parseInt(day) + '天' + parseInt(hours) + '小时'
    } else {
      const day = n / 24;
      return parseInt(day) + '天'
    }
  } else {
    return n + '小时'
  }
}
```