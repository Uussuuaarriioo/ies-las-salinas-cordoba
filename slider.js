
let idx=0;
const slides=document.querySelector('.slides');
const total=document.querySelectorAll('.slide').length;
function show(i){
  idx=(i+total)%total;
  slides.style.transform=`translateX(-${idx*100}%)`;
}
document.getElementById('prev').onclick=()=>show(idx-1);
document.getElementById('next').onclick=()=>show(idx+1);
