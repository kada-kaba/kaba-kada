const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('')
        }
    })
});

const counters = document.querySelectorAll(".counter");