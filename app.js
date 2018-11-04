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

    c();
});

/* online first, fallback to cache */
window.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});


function c(){
    const D = document.getElementById("D").value;
    const d = document.getElementById("d").value;
    const f = document.getElementById("f").value;
    const s = document.getElementById("s").value;
    const r = Math.round(60 * f * eval(s) * d / D / 3.14); 

    document.querySelector('#oD').value = D + "mm";
    document.querySelector('#od').value = d + "mm";
    document.querySelector('#of').value = f + "hz";


    var _r = r * 100/350;
 
    if (_r >= 100) { _r = 100;}

    document.getElementById("bar").style.width = _r + '%';
    document.getElementById("bar").innerHTML = Math.round(r);
}
