function showTime() {
  let date = new Date();
  let d = date.getDay();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let meridiem = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    meridiem = "PM";
  }
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  if (d == 0) {
    day = "Sunday";
  }
  if (d == 1) {
    day = "Monday";
  }
  if (d == 2) {
    day = "Tuesday";
  }
  if (d == 3) {
    day = "Wednesday";
  }
  if (d == 4) {
    day = "Thursday";
  }
  if (d == 5) {
    day = "Friday";
  }
  if (d == 6) {
    day = "Saturday";
  }

  document.getElementById("day").innerHTML = day;
  document.getElementById("hour").innerText = h + " " + ":";
  document.getElementById("minute").innerText = m + " " + ":";
  document.getElementById("second").innerText = s + " ";
  document.getElementById("meridiem").innerText = meridiem;
}
setInterval(showTime, 1000);
