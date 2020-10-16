

const modal = document.querySelector('.modal')

const btnFadeIn = document.getElementById('fade-in')


function fadeIn(){
    TweenMax.to(modal, .5,{autoAlpha:1})
}

btnFadeIn.addEventListener('click', fadeIn)



// fechando modal

const btnClose = document.querySelector('.modal__close')

function close(){
    TweenMax.set([modalHeader,modalBox,btnClose, modal, modalTitle], {clearProps:'all'})
    TweenMax.to(modal, .5,{autoAlpha:0})
}

btnClose.addEventListener('click', close)

// fadeInscale

const modalBox = document.querySelector('.modal__box')

const btnFadeInScale = document.getElementById('fade-in-scale')



function fadeScale(){
    TweenMax.set(modalBox, {scale:0})
    TweenMax.to(modal, .5,{autoAlpha:1})
    TweenMax.to(modalBox, 1,{scale:1,delay: 0.5, ease:Elastic.easeOut})
}

btnFadeInScale.addEventListener('click', fadeScale)

// slide-in

const btnSlideIn = document.getElementById('slide-in')


function slideIn(){
    TweenMax.to(modal, .5,{autoAlpha:1})
    TweenMax.from(modalBox, .7,{autoAlpha:0, top:300})
}

btnSlideIn.addEventListener('click', slideIn)


// fullscreen
const modalHeader = document.querySelector('.modal__header')
const modalTitle = document.querySelector('.modal__title')
const btnFullscreen = document.getElementById('fullscreen')

function fullscreen(){
    TweenMax.set(modal,{backgroundColor: '#fff',scale:0})
    TweenMax.set(btnClose,{color:'#333'})
    TweenMax.set(modalTitle,{color:'#333',backgroundColor:'#fff'})
    TweenMax.set([modalHeader,modalBox],{position:'initial'})

    TweenMax.to(modal,.2 ,{autoAlpha: 1,scale:1})

}

btnFullscreen.addEventListener('click', fullscreen)