function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var txt = document.getElementById('txt');

var tl1 = new TimelineMax();
tl1.to(txt, 2, {fontSize: 90});
//tl1.from(mainHeading, 2, {fontSize: 100});

TweenMax.to("#sun", 5, {opacity:0, y: 20,  repeat:-1, yoyo:true});
TweenMax.to("#moon", 5, {opacity:1, y: 150,  repeat:-1, yoyo:true});

TweenMax.to(".body", 5, {backgroundColor:"#0C0C38", y: 70,  repeat:-1, yoyo:true});


