function GetTime() {
  var now = new Date(); //anlık saat alıyoruz
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  var day = now.getDate();
  var month = now.getMonth() + 1; //javascrip ayı dizi gibi 0'dan başlatıyor
  var year = now.getFullYear();

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
  document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
}
setInterval(function () {
  GetTime();
}, 1000);
