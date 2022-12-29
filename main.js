// time section
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "PM";

  if (date === 0) {
    hh = 12;
  }
  if (date > 12) {
    hh - 12;
    session = "AM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + " : " + mm;
  document.getElementById("main-clock").innerText = time + " " + session;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();

// message section
function message() {
  let date = new Date();
  let hh = date.getHours();
  let msg;

  if (hh < 12) {
    msg = "Good Morning";
  } else if (hh <= 16) {
    msg = "Good Afternoon";
  } else if (hh < 19) {
    msg = "Good Evening";
  } else if (hh >= 19) {
    msg = "Good Night";
  }

  document.getElementById("main-message").innerText = msg;
  let m = setTimeout(function () {
    message();
  }, 1000);
}

message();
