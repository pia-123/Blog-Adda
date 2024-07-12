//nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

$(document).ready(function() {
    $(".filter-item").click(function() {
        const value = $(this).attr("data-filter");
        if (value === "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box")
                .not("." + value)
                .hide("1000");
            $(".post-box")
                .filter("." + value)
                .show("1000");
        }
    });

    $(".filter-item").click(function() {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Scroll to top button (optional)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Dynamic year update (optional)
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
document.querySelector('.footer-bottom p').appendChild(yearSpan);

