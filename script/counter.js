const data = [
    {
        id: "raised-counter",
        min: 10000,
        max: 5000000,
        prefix: "$"
    },
    {
        id: "contributors-counter",
        min: 100,
        max: 1000,
        prefix: ""


    },
    {
        id: "forest-raised-counter",
        min: 10000,
        max: 500000,
        prefix: ""
    },  
    {
        id: "animal-raised-counter",
        min: 1000,
        max: 50000,
        prefix: ""
    }  
    
]

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
            entry.target.classList.add("animated");

            // Create and dispatch event
            entry.target.dispatchEvent(new CustomEvent("animate-count"));
        } 
    })
});

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
    counter.addEventListener("animate-count", function(e) {
        animate(counter);
    });
    observer.observe(counter);
});

// Linear interpolation between x and y using t
const lerp = (x, y, t) => x * (1 - t) + y * t;

// Format number 1000000 => 1.000.000
const numberWithCommas = (x) => Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const counterValues = calculateCounterValues();
function calculateCounterValues() {
    let values = [];
    for (let i = 0; i < data.length; i++) {
        values.push(Math.floor(Math.random() * (data[i].max - data[i].min + 1) + data[i].min));
    }
    return values;
}

function animate(element) {
    let index = 0;
    
    for (let i = 0; i < data.length; i++) {
        if (element.id == data[i].id) {
            index = i;
            break;
        }
    }

    // Target lerp value is precalculated (to ensure consistency)
    const target = counterValues[index];
    
    const duration = 1200;
    const interval = 20;
    
    let timePassed = 0;

    let animation = setInterval(() => {
        timePassed += interval;
        
        if (timePassed >= duration) {
            clearInterval(animation)
        }

        let t = timePassed / duration;

        let value = lerp(0, target, t);
        element.innerHTML = `${data[index].prefix}${numberWithCommas(value)}`;
    }, interval); // Update every interval ms
}
