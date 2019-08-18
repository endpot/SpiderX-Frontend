/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 * @description 年份级别的格式化有问题  待考虑修改
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} time
 * @returns {number}
 */
export function timeStamp(time) {
  return new Date(Date.parse(time.replace(/-/g, '/'))).getTime() / 1000
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}
/**
 * @description 用以计算文件的大小
 * @param {number} size
 */
export function calcFileSize(size) {
  const fileSizeByte = size
  const Kilobyte = 1024 // 1024 * B
  const Megabyte = 1048576 // 1024 * KB
  const Gigabyte = 1073741824 // 1024 * MB
  const Terabyte = 1099511627776 // 1024 * GB
  const Petabyte = 1125899906842624 // 1024 * TB
  const Exabyte = 1152921504606846976 // 1024 * PB
  // const Zettabyte = 1180591620717411303424 // 1024 * EB
  // const Yottabyte = 1208925819614629174706176 // 1024 * ZB

  if (fileSizeByte < Megabyte) {
    return (fileSizeByte / Kilobyte).toFixed(2) + ' KB'
  } else if (fileSizeByte === Megabyte) {
    return '1.00 MB'
  } else if (fileSizeByte > Megabyte && fileSizeByte < Gigabyte) {
    return (fileSizeByte / Megabyte).toFixed(2) + ' MB'
  } else if (fileSizeByte === Gigabyte) {
    return '1.00 GB'
  } else if (fileSizeByte > Gigabyte && fileSizeByte < Terabyte) {
    return (fileSizeByte / Gigabyte).toFixed(2) + ' GB'
  } else if (fileSizeByte === Terabyte) {
    return '1.00 TB'
  } else if (fileSizeByte > Terabyte && fileSizeByte < Petabyte) {
    return (fileSizeByte / Terabyte).toFixed(2) + ' TB'
  } else if (fileSizeByte === Petabyte) {
    return '1.00 PB'
  } else if (fileSizeByte > Petabyte && fileSizeByte < Exabyte) {
    return (fileSizeByte / Petabyte).toFixed(2) + ' PB'
  } else {
    return '文件超过1.00 EB'
  }
}
