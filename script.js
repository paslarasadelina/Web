function startCountdown(element, duration) {
    let timer = duration, minutes, seconds;
    let interval = setInterval(() => {
      minutes = Math.floor(timer / 60);
      seconds = timer % 60;
      element.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  
      if (--timer < 0) {
        clearInterval(interval);
        element.textContent = "Expirat!";
      }
    }, 1000);
  }
  
  window.onload = function () {
    document.querySelectorAll(".countdown").forEach((element) => {
      let duration = parseInt(element.dataset.time, 10); // Citim timpul din atributul data-time
      startCountdown(element, duration);
    });
  };
  