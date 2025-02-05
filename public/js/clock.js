function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const min = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours} : ${min} : ${sec}`
    const clockDiv = document.querySelector(".clock-text");
    clockDiv.textContent = timeString
}

setInterval(updateClock, 1000);
updateClock();