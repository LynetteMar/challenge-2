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

//clock animation

var tl1 = new TimelineMax();
tl1.to(txt, 2, {fontSize: 50});
//tl1.from(mainHeading, 2, {fontSize: 100});

//sun and moon
TweenMax.to("#sun", 10, {opacity:0, y: 600,  repeat:-1, yoyo:true});
TweenMax.from("#moon", 10, {opacity:0, y: 600,  repeat:-1, yoyo:true});

// background color
TweenMax.to(".body", 10, {backgroundColor:"#06061C", repeat:-1, yoyo:true});


//date

var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

var date = document.getElementById('date');

var tl2 = new TimelineMax();
tl2.to(date, 1, {top: 200});
