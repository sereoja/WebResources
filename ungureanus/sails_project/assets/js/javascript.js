
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var greeting = null;
    if (h < 12) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Good Afternoon!';
    }
    document.getElementById('txtGreeting').innerHTML = greeting;
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i;}
    return i;
}
//open Modal
function openModal(mM, moImg, captionTxt, _src, _alt) {
    var modal = document.getElementById(mM);
    var modalImg = document.getElementById(moImg);
    var captionText = document.getElementById(captionTxt);
    modal.style.display = "block";
    modalImg.src = _src;
    captionText.innerHTML = _alt;
}
//close Modal
function closeModal(myM) {
    var modal = document.getElementById(myM);
    modal.style.display = "none";
}
//display size of Windows
function resultSize() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("result").innerHTML = txt;
}
function stopV(element) {
    var video = document.getElementById(element);
    video.src = '#';
}
