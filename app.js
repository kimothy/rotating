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

/* online first, fallback to cache */
window.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});

/* user unstall prompt */
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later on the button event.
  deferredPrompt = e;
// Update UI by showing a button to notify the user they can add to home screen
  btn.style.display = 'block';
});
 
//button click event to show the promt
btn.addEventListener('click', (e) => {
  // hide our user interface that shows our button
  btn.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the prompt');
      } else {
        console.log('User dismissed the prompt');
      }
      deferredPrompt = null;
    });
});

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
}
