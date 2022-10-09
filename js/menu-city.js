
 // jquery libary: <script src="https://code.jquery.com/jquery-3.4.1.js"></script> 

/* The way you would write the code with jquery
//Slide in side menu
    
$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});

$('.group1-btn').click(function(){
    $('nav ul .group1-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
}); 

$('.group2-btn').click(function(){
    $('nav ul .group2-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
});

$('.group3-btn').click(function(){
    $('nav ul .group3-show').toggleClass("show2");
    $('nav ul .third').toggleClass("rotate");
}); 

$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass('active');
});  
*/

//They way you write it with normal Javascript
//Slide in side menu

const btn = document.querySelector('.btn');
const sidebar = document.querySelector('.sidebar'); 

btn.addEventListener('click', function(){
    btn.classList.toggle('click');
    sidebar.classList.toggle('show');
});

const group1Btn = document.querySelector('.group1-btn');
const group1Show =document.querySelector('nav ul .group1-show');
const arrow = document.querySelector('nav ul .first');

group1Btn.addEventListener('click', function(){
    group1Show.classList.toggle('show');
    arrow.classList.toggle('rotate');
});

const group2Btn = document.querySelector('.group2-btn');
const group2Show =document.querySelector('nav ul .group2-show');
const arrow2 = document.querySelector('nav ul .second');

group2Btn.addEventListener('click', function(){
    group2Show.classList.toggle('show1');
    arrow2.classList.toggle('rotate');
});

const group3Btn = document.querySelector('.group3-btn');
const group3Show =document.querySelector('nav ul .group3-show');
const arrow3 = document.querySelector('nav ul .third');

group3Btn.addEventListener('click', function(){
    group3Show.classList.toggle('show2');
    arrow3.classList.toggle('rotate');
});

let changeColor = document.querySelectorAll('nav ul li');
let dropDowns = Array.from(changeColor);

const handleClick = (e) => {
  e.preventDefault();
  dropDowns.forEach(node => {
    node.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
}

dropDowns.forEach(node => {
  node.addEventListener('click', handleClick)
});

// Automatic image slider  
const radioBtn = document.querySelectorAll('.radio');
let counter = 1;
setInterval(function(){
    radioBtn[counter - 1].checked = true;
    counter++;
    if(counter > document.querySelectorAll('.slide').length) {
        counter = 1;
    }
},11000);

for(let j = 0; j < radioBtn.length; j++) {
    radioBtn[j].addEventListener('click', function(e){
        e.preventDefault;
        counter = j + 1;
    });
}
