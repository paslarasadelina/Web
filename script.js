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
// Selectăm elementele necesare
const produseCos = document.getElementById('produse-cos');
const totalElement = document.getElementById('total');
const cosElement = document.getElementById('cos');
const inchideCosButton = document.getElementById('inchide-cos');
const adaugaCosButtons = document.querySelectorAll('.adauga-cos');

// Array pentru produsele din coș
let cos = [];

// Funcție pentru a actualiza vizualizarea coșului
function actualizeazaCos() {
    // Curățăm lista de produse
    produseCos.innerHTML = '';

    // Adăugăm produsele din coș
    cos.forEach(produs => {
        const produsElement = document.createElement('li');
        produsElement.textContent = `${produs.nume} - ${produs.pret} Lei`;
        produseCos.appendChild(produsElement);
    });

    // Actualizăm totalul
    const total = cos.reduce((suma, produs) => suma + produs.pret, 0);
    totalElement.textContent = total;

    // Dacă coșul este gol, ascundem pop-up-ul
    if (cos.length === 0) {
        cosElement.style.display = 'none';
    }
}

// Adăugăm produsul în coș
function adaugaInCos(nume, pret) {
    const produs = { nume, pret: parseFloat(pret) };
    cos.push(produs);
    actualizeazaCos();
    cosElement.style.display = 'flex'; // Arătăm coșul când un produs este adăugat
}

// Adăugăm evenimente pentru fiecare buton „Adaugă în coș”
adaugaCosButtons.forEach(button => {
    button.addEventListener('click', () => {
        const nume = button.getAttribute('data-nume');
        const pret = button.getAttribute('data-preț');
        adaugaInCos(nume, pret);
    });
});

// Închidem coșul
inchideCosButton.addEventListener('click', () => {
    cosElement.style.display = 'none';
});
