# 时间相关

## 判断是否在时间范围内
```javascript
export const isDuringDate = (start, end) => {
  const curDate = new Date()
  const startDate = new Date(start)
  const endDate = new Date(end)
  return curDate >= startDate && curDate <= endDate;
}
```

## 时间格式化
```javascript
/**
 * @param {string} fmt 时间格式
 * @param {date} date new Date()
 * dateFormat('YYYY年mm月dd日 HH:MM:SS', new Date())
 * */
export const dateFormat = (fmt, date) => {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    }
  }
  return fmt;
}
```

## 获取指定日期的前几天或后几天
```javascript
export const getNextDate = (date, day) => {
  const dd = new Date(date)
  dd.setDate(dd.getDate() + day)
  const y = dd.getFullYear()
  const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1
  const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
  return y + '-' + m + '-' + d
}
```

## 获取某个日期的当月第一天和当月最后一天
```javascript
export const getFirstAndLastDate = (date) => {
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month < 10 ? '0' + month : month
  const lastDate = new Date(year, month, 0).getDate()
  return {
    first: year + '-' + month + '-01 00:00:00',
    last: year + '-' + month + '-' + lastDate + ' 23:59:59'
  }
}
```

## 根据身份证获取出生日期
```javascript
export const birthdayByIdCard = (code) => {
    if (code) {
        return `${code.slice(6, 10)}年${code.slice(10, 12)}月${code.slice(12, 14)}日`
    } else {
        return ''
    }
}
```

## 根据身份证获取性别
```javascript
export const genderByIdCard = (code) => {
    if (code) {
        return code.substr(16, 1) % 2 === 1 ? '男' : '女'
    } else {
        return ''
    }
}
```
