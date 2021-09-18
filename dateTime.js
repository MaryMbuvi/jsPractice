//timestamp => an integer representing the number of milliseconds that have passed within a certain period of time.


/* // 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

//Dates before 01.01.1970 have negative timestamps.
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 ); */


//new Date(year, month, date, hours, minutes, seconds, ms)
/**
 * The year must have 4 digits.
 * The month count starts with 0(Jan).
 * The date parameter is actually the day of month, if absent then 1 is assumed.
 * if hours/minutes/seconds/ms is absent, they're assumed to be equal 0. 
 */

/* new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default */

/* let date = new Date(2011, 0, 1, 2, 3, 4, 26);
alert(date); //Sat Jan 01 2011 02:03:04 GMT+0300 (East Africa Time) */


//Date methods
/**
 * getFullYear()
 * getMonth()
 * getDate()
 */

/* let date = new Date();
alert(date.getHours());
alert(date.getUTCHours());
//Time doesn't have UTC
alert(new Date().getTimezoneOffset()); //Returns the difference between UTC and the local time zone, in minutes.
 */

/**Setting date components:
 * setFullYear(year, [month], [date])
 * setMonth(month, [date])
 * setDate(date)
 * setHours(hour, [min], [sec], [ms])
 * setMinutes(min, [sec], [ms])
 * setSeconds(sec, [ms])
 * setMilliseconds(ms)
 * setTime(milliseconds)
 */

/* let date = new Date(2015, 5, 36);
alert(date); */

let date = new Date(0);
alert(date.getDate());