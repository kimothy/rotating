window.addEventListener('load', async e =>{
    if('serviceWorker' in navigator){
        try {
            navigator.serviceWorker.register('sw.js');
            console.log('SW registered');
        } catch (error) {
            console.log('SW reg failed');
            console.log(error);
        }
    }
});

var anim = false;

function a() {
    anim = !anim;
}

i();

function t() {
    var a = document.getElementById("tacho");
    var r = document.getElementById("bar").innerHTML;
    var t = 1 / eval(r) * 60;

    console.log(anim);
    
    if (anim == true) {
	a.style.animationDuration = t + "s";
    }
    else{
	a.style.animationDuration = "0s";
    }
    
}

var bitSizes = [38, 41, 43, 45, 48, 51, 54, 64, 70, 76, 78, 89, 102, 105, 110, 115, 125, 127, 130, 134, 140, 149, 146, 152, 156, 165, 171, 191, 200, 203, 216, 219, 254, 305, 311, 381, 445];

function pD(){
    var element = document.getElementById("oD");
    element.value = eval(element.value) + 5;
    i();
}

function nD(){
    var element = document.getElementById("oD");
    element.value = eval(element.value) - 5;
    i();
}

function pd(){
    var element = document.getElementById("od");
    element.value = eval(element.value) + 1;
    i();
}

function nd(){
    var element = document.getElementById("od");
    element.value = eval(element.value) - 1;
    i();
}

function pf(){
    var element = document.getElementById("of");
    element.value = eval(element.value) + 5;
    i();
}

function nf(){
    var element = document.getElementById("of");
    element.value = eval(element.value) - 5;
    i();
}


function i(){
    const D = document.getElementById("oD").value;
    const d = document.getElementById("od").value;
    const f = document.getElementById("of").value;
    const s = document.getElementById("s").value;
    o(D, d, f, s);
}

function o(D, d, f, s){
    document.querySelector('#oD').value = D;
    document.querySelector('#od').value = d;
    document.querySelector('#of').value = f;

    const r = Math.round(60 * f * eval(s) * d / D / 3.14); 
    document.getElementById("bar").innerHTML = Math.round(r);
}
