window.onload = function () {
    resize()
    const toggleButton = document.querySelector('.navigation .toggle')
    const nav = document.querySelector('.navigation nav')

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('active')
    })
}

window.addEventListener('resize', resize)

function resize() {
    const nav = document.querySelector('.navigation')

    if (window.innerWidth > 768) {
        nav.classList.remove('mobile')
    } else {
        nav.classList.add('mobile')
    }
}