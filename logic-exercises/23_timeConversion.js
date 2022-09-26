/**
 * Time conversion --> Hackeram
 *  Given a time in -hour AM/PM format, convert it to military (24-hour) time.

     Note: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
     12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
     Input: 07:05:45PM
     Output: 19:05:45
 */

  
const timeConversion = (s) => {

  let time = s;
  //Find if is AM or PM
  const AM_OR_PM = time.charAt(8)
  //If is Am and 12 set it to 00
  if(AM_OR_PM === "A" && time.substring(0,2) === "12"){
     time = time.replace(time.substring(0,2), "00")
  }
  //If Pm and more than 12 add 12 to it
  else if(AM_OR_PM ==="P" && parseInt(time.substring(0,2)) > 1 && parseInt(time.substring(0,2)) < 12){
    let add12hours = parseInt(time.substring(0,2)) + 12
    time = time.replace(time.substring(0,2), add12hours.toString())

  } 
  else if(AM_OR_PM === "A" && parseInt(time.substring(0,2)) > 1 && parseInt(time.substring(0,2)) <= 12){
    time = time;
  }
  
  time = time.substring(0,8)
  
  return console.log(time)
}


timeConversion("07:05:45PM")