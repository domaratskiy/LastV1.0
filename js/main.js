$('.skillProcent span').fadeIn(1000);

let dateNow = document.querySelector('.date_now');

let d = new Date();
dateNow.innerHTML = d;



let a1h1 = document.querySelector('.i_am h1');


let a1Text = document.querySelector('.i_amText');
let a1Project = document.querySelector('.myProjects_cont');
let a1Education = document.querySelector('.Education div');

let a1Aside_contac = document.querySelector('.aside_contact div');
let a1Aside_tech = document.querySelector('.aside_tech ul');
let a1Aside_Soft = document.querySelector('.aside_Soft ul');







function addStyleToLink(name, value){
	name.style.transform = value;  
}
addStyleToLink(a1Text, `translate(1000px, 0)`);
addStyleToLink(a1Project, `translate(1000px, 0)`);
addStyleToLink(a1Education, `translate(1000px, 0)`);

addStyleToLink(a1Aside_contac, `scale(0)`);
addStyleToLink(a1Aside_tech, `scale(0)`);
addStyleToLink(a1Aside_Soft, `scale(0)`);




let aminTime1 = 0;

setInterval(() => {
	if(aminTime1 === 360){
		aminTime1 = 0;
	}
	aminTime1++;
	a1h1.style.transform = `rotate(${aminTime1}deg)`;
	a1h1.style.display = 'inline-block';

}, 2);
	




setTimeout(() => {
	addStyle(a1Text, `translate(0)`);
	addStyle(a1Project, `translate(0)`);
	addStyle(a1Education, `translate(0)`);
	addStyle(a1Aside_contac, `scale(1)`);
	addStyle(a1Aside_tech, `scale(1)`);
	addStyle(a1Aside_Soft, `scale(1)`);
},1000);



function addStyle(name, value){
	name.style.transform = value; 
	name.style.transition = `transform 1s cubic-bezier(.14,1.52,.83,.67)`; 
}

