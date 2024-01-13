

function updateClock() {
    const now = new Date();

    const clock = document.getElementById('clock');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;

    const date = document.getElementById('date');
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    date.textContent = `${day}/${month}/${year}`;
}
updateClock();
setInterval(updateClock, 1000);
