// var ProgressBarPercent = 0;
// var ChangeProgressbar = function(){
//   ProgressBarPercent = ProgressBarPercent + 50;
//   $(".progress-bar").css("width", String(ProgressBarPercent) + "%");
// }
// ChangeProgressbar()

var i = 0;

function time() {
  i += 1;
  $(".progress-bar").css("width", String(i) + "%");
  $("#percent").text(String(i) + "%");
  
  if(i === 100){
    clearInterval(interval)
  }
}

var  interval = setInterval(time, 500);



// for (var i=0; i<101; i++) {
//     $(".progress-bar").css("width", String(i) + "%");
//     $("#percent").text(String(i) + "%");
//   }