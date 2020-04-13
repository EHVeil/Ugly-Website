let buscemiLove = 0;
let click = 1;

let loveCount = document.getElementById('love-counter');
let loveButton = document.getElementById('love-button');

loveButton.addEventListener("click",function() {
 buscemiLove = click + buscemiLove;
  refreshLoveAmount()
});

let refreshLoveAmount = function() {
  loveCount.innerHTML = buscemiLove;
}
