// // seletores
// const sliderItem = document.querySelectorAll('.slider__item')
// const texts = document.querySelectorAll('p')

// TweenMax.set(sliderItem,{left:'-100vw'}) ou ocutar no css



// TweenMax.set(sliderItem[0],{
//     scale:.9
// })
// timeline

// const timeline = new TimelineMax()

// timeline
//     .to(sliderItem[0], .5,{left:0, delay: .5})
//     .to(sliderItem[0], .5,{scale:1})
//     .staggerFrom(texts, .5,{y: 300, autoAlpha:0, ease:Back.easeOut}, 0.2)

/** rafatorando */

//Sletores
const sliderItem = document.querySelectorAll('.slider__item')
const btnBack = document.querySelector('.slider__arrows--left')
const btnNext = document.querySelector('.slider__arrows--right')

// slider
const Slider = {
    currentItem:0, 

    init:  () =>{
        Slider.in(Slider.currentItem);
        setInterval(()=>{
            Slider.next()
        }, 5000)
    },

    in: (index) => {
        // seletores
        const item = sliderItem[index]
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax()        

        TweenMax.set(item, { scale: .9 })
        TweenMax.set(item,{ left: '-100vw' });

        timeline
            .to(item, .5,{left:0, delay: 1})
            .to(item, .5, { scale: 1 })
            .staggerFrom(texts, .5, { y: 300, autoAlpha: 0, ease: Back.easeOut }, 0.2)
            
    },

    out:(index, nextIndex) => {
        const item = sliderItem[index]
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax()
        

        timeline
            .staggerTo(texts, .5,{y: 300, autoAlpha:0, ease:Back.easeIn}, '-0.5')
            .to(item, .5,{scale:.9})
            .to(item, .5,{left:'100vw'})
            .call(Slider.in, [nextIndex], this, '-=1.5')
            .set(texts,{clearProps:'all'})
    },

    next: () => {
        const next = Slider.currentItem !== sliderItem.length - 1 ? Slider.currentItem + 1 : 0
        Slider.out(Slider.currentItem, next)
        Slider.currentItem = next
    },

    prev: () => {
        const prev = Slider.currentItem > 0 ? Slider.currentItem - 1 : sliderItem.length - 1
        Slider.out(Slider.currentItem, prev)
        Slider.currentItem = prev
    },


}


btnNext.addEventListener('click', Slider.next)
btnBack.addEventListener('click', Slider.prev)
Slider.init()