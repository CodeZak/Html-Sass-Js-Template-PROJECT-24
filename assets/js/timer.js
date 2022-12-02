const secs = document.querySelector(".secs");
const mins = document.querySelector(".mins");
const hours = document.querySelector(".hours");
const days = document.querySelector(".days");

const timeInterval = setInterval(myFunction, 1000);
let futureDate = Date.now() + 1000000000;

function myFunction() {
   let currentDate = Date.now();

    // 1s = 1000ms
    // 1 min = 60000ms
    // 1 hour = 3600000ms
    // 1 day = 24 * 3600 = 86 400 000 ms

    let delta_t = futureDate - currentDate;
    const daysLeft = Math.floor(delta_t / 86400000);
    const hoursLeft = Math.floor((delta_t % 86400000) / 3600000);
    const minLeft = Math.floor((delta_t % 3600000) / 60000);
    const secLeft = Math.floor((delta_t % 60000) / 1000);
    let timeLeft = [daysLeft, hoursLeft, minLeft, secLeft];

    timeLeft = timeLeft.map(function (t) {
        if (t < 0) {
            clearInterval(timeInterval);
        }
        if (t < 10) {
            return "0" + t;
        } else {
            return t;
        }
    });
    days.innerHTML = timeLeft[0];
    hours.innerHTML = timeLeft[1];
    mins.innerHTML = timeLeft[2];
    secs.innerHTML = timeLeft[3];
}
