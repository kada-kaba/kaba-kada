const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
            entry.target.classList.add("animated");

            // Create the event
            var event = new CustomEvent("animate-count");
  
            // Dispatch/Trigger/Fire the event
            entry.target.dispatchEvent(event);
        } 
        else {
            entry.target.classList.remove("animated");
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

const data = [
    {
        id: "raised-counter",
        min: 10000,
        max: 1000000,
        prefix: "$"
    },
    {
        id: "contributors-counter",
        min: 100,
        max: 1000,
        prefix: ""
    }
]
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const lerp = (x, y, a) => x * (1 - a) + y * a;

function animate(element) {
    console.log("animate");

    let index = 0;

    for (let i = 0; i < data.length; i++) {
        if (element.id == data[i].id){
            index = i;
            break;
        }
    }

    const target = randomIntFromInterval(data[index].min, data[index].max);
    
    const duration = 1100;
    const interval = 20;
    
    let timePassed = 0;

    let animation = setInterval(() => {
        timePassed += interval;
        
        if (timePassed >= duration) {
            clearInterval(animation)
        }

        let t = timePassed / duration;

        let value = lerp(0, target, t);
        element.innerHTML = `${data[index].prefix}${value.toFixed(0)}`;
    }, interval); // Update every interval ms
}