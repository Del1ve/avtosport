document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})


class Slider {
	constructor(slider, autoplay = true,) {
			// элемент div.carousel
			this.slider = slider;
			// все кадры (слайды)
			this.allFrames = slider.querySelectorAll('.carousel-item');
			// цепочка кадров
			this.frameChain = slider.querySelector('.carousel-slides');
			// кнопка «вперед»
			this.nextButton = slider.querySelector('.carousel-next');
			// кнопка «назад»
			this.prevButton = slider.querySelector('.carousel-prev');

			this.index = 0; 
			this.length = this.allFrames.length; 
			this.autoplay = autoplay; 
			this.paused = null; 

			this.init();
	}

	init() {
			this.dotButtons = this.dots(); 
			this.allFrames.forEach(frame => frame.style.width = 100/this.length + '%');			
			this.frameChain.style.width = 100 * this.length + '%';
			this.nextButton.addEventListener('click', event => { 
					event.preventDefault();
					this.next();
			});
			this.prevButton.addEventListener('click', event => { 
					event.preventDefault();
					this.prev();
			});

			this.dotButtons.forEach(dot => {
					dot.addEventListener('click', event => {
							event.preventDefault();
							const index = this.dotButtons.indexOf(event.target);
							if (index === this.index) return;
							this.goto(index);
					});
			});

			if (this.autoplay) { 
					this.play();
					
					this.slider.addEventListener('mouseenter', () => clearInterval(this.paused));
					
					this.slider.addEventListener('mouseleave', () => this.play());
			}
	}

	goto(index) {
		
			if (index > this.length - 1) {
					this.index = 0;
			} else if (index < 0) {
					this.index = this.length - 1;
			} else {
					this.index = index;
			}
			// 
			this.move();
	}
	next() {
			this.goto(this.index + 1);
	}
	prev() {
			this.goto(this.index - 1);
	}
	move() {
		
			const offset = 100/this.length * this.index;
			this.frameChain.style.transform = `translateX(-${offset}%)`;
			this.dotButtons.forEach(dot => dot.classList.remove('active'));
			this.dotButtons[this.index].classList.add('active');
	}
	
	dots() {
			const ol = document.createElement('ol');
			ol.classList.add('carousel-indicators');
			const children = [];
			for (let i = 0; i < this.length; i++) {
					let li = document.createElement('li');
					if (i === 0) li.classList.add('active');
					ol.append(li);
					children.push(li);
			}
			this.slider.prepend(ol);
			return children;
	}
}


                                           // FIRST BLOCK 1



const elem_1 = document.getElementById('slider_1');
const elem_2 = document.getElementById('slider_2');

let a = true;
function newPosition1(){
	if (a){
		rotate();
		newPosition();
}
else {
	antiRotate();
	newAntiPosition();

}
a = !a;
}

function newPosition(){ 
  const x = "calc((1vw + 1vh) * 23.5)";
    elem_1.style.marginRight = x;
  elem_1.style.transition = "1s";
	elem_2.style.transition = "1s";
}
function newAntiPosition(){ 
   const j = "calc((1vw + 1vh) * (-1.51))"; 
    elem_1.style.marginRight = j;
  elem_1.style.transition = "1s";
	elem_2.style.transition = "1s";

}
const elem_3 = document.getElementById('chest');

function rotate(){ 
	elem_3.style.transform = "rotate(90deg)";
  elem_3.style.transition = "1.5s";
}
function antiRotate(){ 
	elem_3.style.transform = "rotate(-90deg)";
  elem_3.style.transition = "1.5s";
}


                                           // SECOND BLOCK 2


const elem_1_2 = document.getElementById('slider_1.2');
const elem_2_2 = document.getElementById('slider_2.2');


let a2 = true;
function newPosition1_2(){
	if (a2){
		rotate2();
		newPosition2();
}
else {
	antiRotate2();
	newAntiPosition2();

}
a2 = !a2;
}

function newPosition2(){ 
  const x = "calc((1vw + 1vh) * 23.5)";
    elem_1_2.style.marginRight = x;
  elem_1_2.style.transition = "1s";
	elem_2_2.style.transition = "1s";
}
function newAntiPosition2(){ 
   const j = "calc((1vw + 1vh) * (-1.5))"; 
    elem_1_2.style.marginRight = j;
  elem_1_2.style.transition = "1s";
	elem_2_2.style.transition = "1s";

}
const elem_3_2 = document.getElementById('chest2');

function rotate2(){ 
	elem_3_2.style.transform = "rotate(90deg)";
  elem_3_2.style.transition = "1.5s";
}
function antiRotate2(){ 
	elem_3_2.style.transform = "rotate(-90deg)";
  elem_3_2.style.transition = "1.5s";
}


                                         // THIRD BLOCK 3
																					 
const elem_1_3 = document.getElementById('slider_1.3');
const elem_2_3 = document.getElementById('slider_2.3');


let a3 = true;
function newPosition1_3(){
	if (a3){
		rotate3();
		newPosition3();
}
else {
	antiRotate3();
	newAntiPosition3();

}
a3 = !a3;
}

function newPosition3(){ 
  const x = "calc((1vw + 1vh) * 23.5)";
    elem_1_3.style.marginRight = x;
  elem_1_3.style.transition = "1s";
	elem_2_3.style.transition = "1s";
}
function newAntiPosition3(){ 
   const j = "calc((1vw + 1vh) * (-1.5))"; 
    elem_1_3.style.marginRight = j;
  elem_1_3.style.transition = "1s";
	elem_2_3.style.transition = "1s";

}
const elem_3_3 = document.getElementById('chest3');

function rotate3(){ 
	elem_3_3.style.transform = "rotate(90deg)";
  elem_3_3.style.transition = "1.5s";
}
function antiRotate3(){ 
	elem_3_3.style.transform = "rotate(-90deg)";
  elem_3_3.style.transition = "1.5s";
}

                                         // FOUR BLOCK 4

const elem_1_4 = document.getElementById('slider_1.4');
const elem_2_4 = document.getElementById('slider_2.4');


let a4 = true;
function newPosition1_4(){
	if (a4){
		rotate4();
		newPosition4();
}
else {
	antiRotate4();
	newAntiPosition4();

}
a4 = !a4;
}

function newPosition4(){ 
  const x = "calc((1vw + 1vh) * 23.5)";
    elem_1_4.style.marginRight = x;
  elem_1_4.style.transition = "1s";
	elem_2_4.style.transition = "1s";
}
function newAntiPosition4(){ 
   const j = "calc((1vw + 1vh) * (-1.5))"; 
    elem_1_4.style.marginRight = j;
  elem_1_4.style.transition = "1s";
	elem_2_4.style.transition = "1s";

}
const elem_3_4 = document.getElementById('chest4');

function rotate4(){ 
	elem_3_4.style.transform = "rotate(90deg)";
  elem_3_4.style.transition = "1.5s";
}
function antiRotate4(){ 
	elem_3_4.style.transform = "rotate(-90deg)";
  elem_3_4.style.transition = "1.5s";
}


	