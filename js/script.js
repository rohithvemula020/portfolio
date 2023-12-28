const header = document.querySelector("header");
const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");
let skillsPlayed = false;
const links = document.querySelectorAll(".nav-link")
const toggle_btn = document.querySelector(".toggle-btn");
const hamburger = document.querySelector(".hamburger")


window.addEventListener("scroll", () => {
    
    if (!skillsPlayed) {
        skillsCounter();
    }
});

/*-------------sticky navbar--------------*/
function stickynavbar() {
    header.classList.toggle("scrolled", window.scrollY > 0)

} stickynavbar();
window.addEventListener("scroll", stickynavbar);


// scroolllllllllllllll reveal animation


let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { orgin: "top", delay: 700 });

// skilll progress animation bar

function hasReached(el) {
    let topPostition = el.getBoundingClientRect().top;
    if (window.innerHeight >= topPostition + el.offsetHeight) return true;
    return false;
}
function updateCount(num, maxnum) {
    let currentNum = +num.innerText;

    if (currentNum < maxnum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxnum)
        }, 12);
    }



}
function skillsCounter() {
    if (!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokevalue = 427 - 427 * (target / 100);
        progress_bars[i].style.setProperty("--target", strokevalue);

        setTimeout(() => {
            updateCount(counter, target)
        }, 400)

    })

    progress_bars.forEach(
        (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    );
}


/*-------------------- dark theme colouring----------------------*/
let firstTheme = localStorage.getItem("dark")

changeTheme(+firstTheme);

function changeTheme(isDark){
    if (isDark){
        document.body.classList.add("dark");
        localStorage.setItem("dark", 1);
    }
    else {
        document.body.classList.remove("dark");
        localStorage.setItem("dark", 0);

    }
}

toggle_btn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
})

/* hamburger  */

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
})
links.forEach(link => link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.toggle("stopScrolling");

}))


document.addEventListener('DOMContentLoaded', function () {
    let mixer = mixitup('.portfolio-gallery', {
        selectors: {
            target: '.prt-card'
        },
        animation: {
            duration: 500,
        }
    });
});



