console.log(window.location.href);

window.addEventListener('scroll', (e)=>{
    if(window.scrollY > 100){
        document.querySelector('nav').classList.add('scroll');
    }else{
        document.querySelector('nav').classList.remove('scroll');
    }
});

const unionDots = document.querySelectorAll('.union-dot');

unionDots.forEach((dot, index)=>{
    dot.addEventListener('click', (e)=>{
        unionDots.forEach((dot)=>{
            dot.innerHTML = '';
        });
        dot.innerHTML = '<img src="./assets/icons/check.svg" alt="check icon"></img>';
    });
});