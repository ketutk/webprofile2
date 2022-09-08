const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click',function(){
    nav.classList.toggle('slide');
});

window.addEventListener('scroll',()=> {
    let content = document.querySelectorAll('.section');
    let screenPosition = window.innerHeight/1.2;
for(var i =0;i<content.length;i++){
    let contentPosition = content[i].getBoundingClientRect().top;
    if(contentPosition < screenPosition ){
        content[i].classList.add('active');
    }else{
        content[i].classList.remove('active');
    }
}
});
function isElementInViewport(el){
     if(typeof jQuery === "function" && el instanceof jQuery){
        el = el[0];
     }
     var rect = el.getBoundingClientRect();
     return(
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)&& rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
     );
}

var scroll = window.requestAnimationFrame || function(callback){window.setTimeout(callback,1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop(){
    elementsToShow.forEach(function(element){
        if(isElementInViewport(element)){
            element.classList.add('is-visible');
        } else{
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}
loop();
var popup = document.querySelectorAll('.contact');
popup.forEach(function(pop){
    pop.addEventListener('click',() => {
            document.querySelector('.popup').classList.add('pop');
        });
});
// document.querySelector('.contact').addEventListener('click',function(){
//     document.querySelector('.popup').classList.add('pop');
// });
document.querySelector('.popup .close-btn').addEventListener('click',function(){
    document.querySelector('.popup').classList.remove('pop');
});

// Mengubah Navigation berdasarkan Posisi Scroll
const navScroll = document.querySelector('nav');
const navScrollFont = document.querySelectorAll('nav ul li a');
const toggleColor = document.querySelectorAll('.menu-toggle span');
const sectionOne = document.querySelector('.home');
const sectionTwo = document.querySelector('.blackbg');

const sectionOneOptions = {
    rootMargin:"-200px 0px 0px 0px"
};
const sectionTwoOptions = {
    rootMargin:"0px 0px -650px 0px"
};
const sectionOneObserver = new IntersectionObserver(function(
    entries, sectionOneObserver)
    {
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            navScroll.classList.add('nav-scrolled1');
        } else{
            navScroll.classList.remove('nav-scrolled1');
        }
    });
}, sectionOneOptions);
const sectionTwoObserver = new IntersectionObserver(function(
    entries, sectionTwoObserver)
    {
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            navScrollFont.forEach(function(scrollFont){
                scrollFont.classList.add('nav-scrolled2');
            });  
            toggleColor.forEach(function(togCol){
                togCol.classList.remove('toggle-color1');
                togCol.classList.add('toggle-color');
            });   
            navScroll.classList.add('nav-scrolled2');
        } else{
            navScrollFont.forEach(function(scrollFont){
                scrollFont.classList.remove('nav-scrolled2');
            });   
            toggleColor.forEach(function(togCol){
                togCol.classList.remove('toggle-color');
                togCol.classList.add('toggle-color1');
            });  
            navScroll.classList.remove('nav-scrolled2');
        }
    });
}, sectionTwoOptions);

sectionOneObserver.observe(sectionOne);
sectionTwoObserver.observe(sectionTwo);
