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
  

  //////////////////////////
  document.addEventListener("DOMContentLoaded", function() {
    const mesaj = document.createElement("div");
    mesaj.style.position = "fixed";
    mesaj.style.bottom = "10px";
    mesaj.style.right = "10px";
    mesaj.style.background = "rgba(255, 255, 255, 0.9)";
    mesaj.style.padding = "8px 12px";
    mesaj.style.borderRadius = "8px";
    mesaj.style.fontSize = "14px";
    mesaj.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    mesaj.style.transition = "opacity 0.5s ease-in-out";
    
    const ora = new Date().getHours();
    let text = "Bine ai venit! 💖";
    if (ora < 12) text = "Bună dimineața! Strălucește astăzi! ✨";
    else if (ora < 18) text = "Sperăm că ai o zi minunată! 🌸";
    else text = "O seară relaxantă, frumusețe! 🌙";

    mesaj.innerText = text;
    document.body.appendChild(mesaj);

    setTimeout(() => mesaj.style.opacity = "0", 4000); // Se estompează după 4 secunde
    setTimeout(() => mesaj.remove(), 5000); // Se șterge după 5 secunde
});

///////////////////////////////////////// 
