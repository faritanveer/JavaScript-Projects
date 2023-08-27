var btn = document.getElementById('btn');
// var con = document.getElementById('con')
function trigger() {
    con.style.backgroundColor="white"
    con.style.color="black"
    btn.style.color="white"
    btn1.style.color="white"
    instagram.style.backgroundColor="white"
    facebook.style.backgroundColor="white"
    facebook.style.color="navy"
}
btn.addEventListener('click',trigger);

var btn1 = document.getElementById('btn1');
// var con = document.getElementById('con')
function trigger1() {
    con.style.backgroundColor="#303030"
    con.style.color="white"
    btn.style.color="black"
    btn1.style.color="black"
    instagram.style.backgroundColor="black"
    facebook.style.backgroundColor="black"
}
btn1.addEventListener('click',trigger1);

function Mouse() {
    btn.style.boxShadow="10px"
    btn.style.backgroundColor="pink"
   
}
btn.addEventListener('mouseover',Mouse);

function Mouse1() {
    btn1.style.boxShadow="10px"
    btn1.style.backgroundColor="pink"
}

btn1.addEventListener('mouseover',Mouse1);

function mouseOut() {
    btn.style.boxShadow="none"
    btn.style.backgroundColor="#303030"
   
}
btn.addEventListener('mouseout',mouseOut);

function mouseOut1() {
    btn1.style.boxShadow="none"
    btn1.style.backgroundColor="#303030"
}


btn1.addEventListener('mouseout',mouseOut1);