const imgArrItem = document.querySelectorAll('.slide-img__item img')
const imgWrap = document.querySelectorAll('.slide-img__item')

/* Show Images after load */

imgArrItem.forEach(item => {
    setTimeout(() => {item.classList.remove('fade')}, 500)
})

/* Parallax Effect */

if (window.matchMedia("(min-width: 769px)").matches) {
    imgWrap.forEach((item, i) => {
        window.addEventListener('mousemove', function(e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            item.style.transform = 'rotate(1.5deg) translate(' + x * (20*(i+1)) + 'px, ' + y * (50/(i+2)) + 'px)';
        });
    })
}

/* Mobile Menu */

const menuBtn = document.getElementById("mobile-menu");
menuBtn.addEventListener('click', function(){
    document.getElementById("menu").classList.toggle('active')
})
