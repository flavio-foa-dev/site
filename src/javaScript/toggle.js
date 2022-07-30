const btnMobile = document.getElementById('btn-mobile');
const btn = document.querySelectorAll('.control')
const images = document.querySelectorAll('.image')
let focus = 0;
const gallery = images.length

btn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const left = e.target.classList.contains("left")
    if (left){
      focus -= 1;
    }else{
      focus += 1;
    }
    if (focus >= gallery) {
      focus = 0;
    }
    if (focus < 0) {
      focus = gallery -1;
    }

    images.forEach(image => image.classList.remove("atual"));
    images[focus].scrollIntoView({
      inline:'center',
      behavior:"smooth",
  })
    images[focus].classList.add("atual");
  })
})



function toggleMobile(){
const nav = document.getElementById('nav');
nav.classList.toggle('active');

}

btnMobile.addEventListener('click',toggleMobile);







