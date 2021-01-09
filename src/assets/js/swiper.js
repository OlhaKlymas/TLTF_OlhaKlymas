import Swiper from 'swiper';

const SliderText = new Swiper('.slider-text', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    speed: 400,
    spaceBetween: 30
})

const imgArr = ['/assets/images/image2.png', '/assets/images/image1.png', '/assets/images/image3.png']
const imgArrTag = document.querySelectorAll('.slide-img__item img')

let i = 0
let j = 0

const changeImg = function (){
    imgArrTag.forEach(item => {
        item.classList.add('fade');
        setTimeout(() => {
            item.src = imgArr[i]
            i++
            i === imgArrTag.length ? i = 0 : i
        }, 500)
    })
    j++
    j === imgArrTag.length ? j = 0 : j
    i = j
    imgArrTag.forEach(item => {
        setTimeout(() => {item.classList.remove('fade')}, 500)
    })
}

SliderText.on('slideChangeTransitionStart', function () {
    changeImg()
});