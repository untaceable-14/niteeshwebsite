const showMenu = (toggleID,navID) =>{
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID) 
    if(toggle && nav){
        toggle.addEventListener('click',()=>{nav.classList.toggle('shpw')})
    }
}
showMenu('nav-togglr','nav-menu')

constnavLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navLink.forEach(n =>n.classList.remove('active'))
    this.classList.add('active') 

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('home__img',{delay: 400})
sr.reveal('home__social-icon',{interval: 200})


sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})



sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 400})

sr.reveal('.work__img',{interval: 200})

sr.reveal('.contact__input',{interval: 200})




//const sections = document.querySelectorAll('section[id]')

/*function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); */