window.addEventListener('resize', resize)
window.onload = function () {
    resize()
    const toggleButton = document.querySelector('.navigation .toggle')
    const nav = document.querySelector('.navigation nav')
    const navLinks = document.querySelectorAll('.navigation nav a')

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('active')
    })

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active')
        })
    })
}

function resize() {
    const nav = document.querySelector('.navigation')

    if (window.innerWidth > 768) {
        nav.classList.remove('mobile')
    } else {
        nav.classList.add('mobile')
    }
}