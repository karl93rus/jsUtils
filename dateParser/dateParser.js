class DateUtil {
  constructor() { }

  convertStrToDate(datestring) {  // конвертация строки типа "25.03.2019 12:26:43" в формат Date
    return new Date(datestring.replace(/(\d+).(\d+).(\d+) (\d+):(\d+):(\d+)/, '$3-$2-$1T$4:$5:$6.000Z'));
  }

  dateToStr(date) {  // конвертация Date() в строку типа "25.03.2019 12:26"
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const mm = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return `${date.getFullYear()}.${mm}.${dd} ${hours}:${mins}`;
  }

  twoDaysToString(datestring) { // сегодня, вчера, дальше просто дата
    let today = new Date();
    let itemDate = this.convertStrToDate(datestring);
    if(today.getDate() === itemDate.getDate() && today.getMonth() === itemDate.getMonth() && today.getFullYear() === itemDate.getFullYear()) {
      return `Сегодня в ${datestring.split(' ')[1]}`;
    } else if(today.getDate() - 1 === itemDate.getDate() && today.getMonth() === itemDate.getMonth() && today.getFullYear() === itemDate.getFullYear()) {
      return `Вчера в ${datestring.split(' ')[1]}`;
    } else {
      return `${datestring.split(' ')[0]} в ${datestring.split(' ')[1]}`;
    }
  }

  dateToStrLong(datestring) { // сегодня, вчера, менее недели назад, менее месяца назад, 1-11 месяцев назад, более года назад
    let today = new Date();
    let itemDate = this.convertStrToDate(datestring);
    if(today.getDate() === itemDate.getDate() && today.getMonth() === itemDate.getMonth() && today.getFullYear() === itemDate.getFullYear()) {
      return `сегодня в ${datestring.split(' ')[1]}`;
    } else if(today.getDate() - 1 === itemDate.getDate() && today.getMonth() === itemDate.getMonth() && today.getFullYear() === itemDate.getFullYear()) {
      return `вчера в ${datestring.split(' ')[1]}`;
    } else if(today - itemDate < 604800000) {
      return 'менее недели назад';
    } else if(today - itemDate > 604800000 && today - itemDate < 2592000000) { // > week && < month
      return 'менее месяца назад';
    } else if(today - itemDate > 2592000000 && today - itemDate < 31104000000) { // > month && < year
      let amount = Math.trunc((today - itemDate) / 2592000000);
      let text = 'месяцев';
      if(amount == 1)
        text = 'месяц';
      else if(amount > 1 && amount < 5)
        text = 'месяца';
      return `${amount} ${text} назад`;
    } else {
      return 'более года назад';
    }
  }

  printString(datestring) {
    console.log(this.convertStrToDate(datestring));
  }
}

export const dateParser = new DateUtil();