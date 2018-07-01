const moment = require('moment');
const lunar = require('lunar');


const DateFormatter = {
  FORMAT_DATE: 'YYYY-MM-DD',
  FORMAT_TIMESTAMP: 'x',
  FORMAT_DATETIME: 'YYYY-MM-DD HH:mm',
  FORMAT_SECOND: 'YYYY-MM-DD HH:mm:ss',
  FORMAT_TIME: 'HH:mm:ss',
  CAL_MINUTES: 1000 * 60,
  CAL_HOURS: 1000 * 60 * 60,
  CAL_DAYS: 1000 * 60 * 60 * 24
};

export const DateUtils = {
  getDateString: (date) => {
    return moment(date).format(DateFormatter.FORMAT_DATE);
  },
  getDateTimeString: (date) => {
    return moment(date).format(DateFormatter.FORMAT_DATETIME);
  },
  getSecondString: (date) => {
    return moment(date).format(DateFormatter.FORMAT_SECOND);
  },
  getTimeString: (date) => {
    return moment(date).format(DateFormatter.FORMAT_TIME);
  },
  getTimestamp: (date) => {
    return parseInt(moment(date).format(DateFormatter.FORMAT_TIMESTAMP));
  },
  getCustomStr: (date, format) => {
    return moment(date).format(format);
  },
  calDiffs: (time) => {
    return time && moment(time).fromNow();
  },
  getLunarDate: (dateString) => {
    try {
      const timeString = '子丑丑寅寅卯卯辰辰巳巳午午未未申申酉酉戌戌亥亥子';
      const momentT = moment(dateString);
      const year = momentT.year();
      const month = momentT.month();
      const day = momentT.date();
      const hours = momentT.hours();
      const date = new Date(year, month, day);
      const lunar1 = lunar(date);
      return lunar1.toString().replace('农历', '') + timeString.charAt(hours) + '时';
    } catch (e) {
      return '';
    }
  }
};
