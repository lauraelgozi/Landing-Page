var x = document.getElementById("mandatory");
var y = document.getElementById("mandatory2");
var z = document.getElementById("mandatory3");
var span = document.getElementById("star");
var span2 = document.getElementById("star2");
var span3 = document.getElementById("star3");
function myFunction(e) {
    if (e.target.id == "mandatory") {
        span.style.display = "none"
    }
}
function myFunction2(e) {
    if (e.target.id == "mandatory2") {
        span2.style.display = "none"
    }
}
function myFunction3(e) {
    if (e.target.id == "mandatory3") {
        span3.style.display = "none"
    }
}
x.addEventListener("keyup", myFunction);
y.addEventListener("keyup", myFunction2);
z.addEventListener("keyup", myFunction3);