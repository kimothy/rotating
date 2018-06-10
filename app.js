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

function c(){
    const D = document.getElementById("D").value;
    const d = document.getElementById("d").value;
    const f = document.getElementById("f").value;
    const r = 60 * f *5 / 6 * d / D / 3.14; 

    var _r = r * 100/350;
    if (_r >= 100) { _r = 100;}

    document.getElementById("bar").style.width = _r + '%';
    document.getElementById("bar").innerHTML = Math.round(r);
}