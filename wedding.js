const countDownDate = new Date('Jul 12, 2024 19:30:00').getTime();

const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.countdown').innerHTML =
        `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;

    if (distance < 0) {
        clearInterval(x);
    }
})