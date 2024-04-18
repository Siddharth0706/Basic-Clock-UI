function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h >= 12) {
    session = "PM";
  }
  if (h > 12) {
    h = h - 12;
  }
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  var day = date.toLocaleDateString("en-US", { weekday: "long" });
  var month = date.toLocaleDateString("en-US", { month: "long" });
  var currentDate =
    day + ", " + month + " " + date.getDate() + ", " + date.getFullYear();
  var greeting;

  if (h >= 6 && h < 12) {
    greeting = "Good Morning!";
  } else if (h >= 12 && h < 18) {
    greeting = "Good Afternoon!";
  } else if (h >= 18 && h < 21) {
    greeting = "Good Evening!";
  } else {
    greeting = "Good Night!";
  }

  document.getElementById("clock").innerHTML = time;
  document.getElementById("date").innerHTML = currentDate;
  document.getElementById("greeting").innerHTML = greeting;

  setTimeout(showTime, 1000);
}
showTime();
