const cards = document.querySelectorAll(".card");
for(let i=0; i<cards.length; i++){
	cards[i].addEventListener('mousemove', rotate);
	cards[i].addEventListener('mouseleave', clearRotate);
}

function rotate(e){
	const cardItem = this.querySelector(".card-item");
	const force = 12;
	const offsetY = -(e.offsetY - cardItem.offsetHeight/2)/force;
	const offsetX = (e.offsetX - cardItem.offsetWidth/2)/force;
	cardItem.style.transform = 'rotateX(' + offsetY + 'deg) rotateY(' + offsetX + 'deg)';
}


function clearRotate(e){
	if(e.target.classList.contains("card")){
		const cardItem = this.querySelector(".card-item");
		cardItem.style.transition = "0.4s"
		cardItem.style.transform = 'rotateX(0) rotateY(0)';
	}
}

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };


});


var nav = document.querySelector('nav');
// var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
if (window.pageYOffset > 100) {
  nav.classList.add('bg-light', 'shadow',"navbar-light");
} 
else {
  nav.classList.remove('bg-light', 'shadow',"navbar-light");
}
});
