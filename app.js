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

    /* make first calculation på range defaults*/
    c();
});

/*
window.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
*/
var anim = false;

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

function a() {
    anim = !anim;
}

function i(){
    const D = document.getElementById("oD").value;
    const d = document.getElementById("od").value;
    const f = document.getElementById("of").value;
    const s = document.getElementById("s").value;
    o(D, d, f, s);
}

function c(){
    const D = document.getElementById("D").value;
    const d = document.getElementById("d").value;
    const f = document.getElementById("f").value;
    const s = document.getElementById("s").value;
    o(D, d, f, s);
}

function o(D, d, f, s){
    document.querySelector('#oD').value = D;
    document.querySelector('#od').value = d;
    document.querySelector('#of').value = f;

    document.getElementById("D").value = D;
    document.getElementById("d").value = d;
    document.getElementById("f").value = f;

    const r = Math.round(60 * f * eval(s) * d / D / 3.14); 
    document.getElementById("bar").innerHTML = Math.round(r);

    t();
}
