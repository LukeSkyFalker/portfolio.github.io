// HAMBURGER MENU

const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarLinks = document.getElementById("menu");

hamburgerMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});



// PULSANTE FRECCIA
const scrollTopBtn = document.getElementById("scroll-top-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { // Mostrare il pulsante solo quando l'utente ha scrollato almeno 200px
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// SEND EMAIL

document.getElementById("contact-em").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Oggetto della Mail";
    // Corpo predefinito
    var body = "Scrivi qui il corpo della tua mail";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});


// FREE GRAPHIC PACK  
document.getElementById("mailfree").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Free Graphic Pack";
    // Corpo predefinito
    var body = "Ciao, sarei interessato a questo pacchetto.";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});


// STANDARD GRAPHIC PACK  
document.getElementById("mailstand").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Standard Graphic Pack";
    // Corpo predefinito
    var body = "Ciao, sarei interessato a questo pacchetto.";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});

// MEDIUM GRAPHIC PACK  
document.getElementById("mailprem").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Medium Graphic Pack";
    // Corpo predefinito
    var body = "Ciao, sarei interessato a questo pacchetto.";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});

// PREMIUM GRAPHIC PACK  
document.getElementById("mailenter").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Premium Graphic Pack";
    // Corpo predefinito
    var body = "Ciao, sarei interessato a questo pacchetto.";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});

// SERVER DISCORD GRAPHIC PACK  
document.getElementById("maildisc").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Server discord Pack";
    // Corpo predefinito
    var body = "Ciao, sarei interessato a questo pacchetto.";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});

// EDITING VIDEO 
document.getElementById("mailvid").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Richiesta preventivo editing video";
    // Corpo predefinito
    var body = "Questo è il corpo della mail. Puoi modificare questo testo con ciò che desideri.";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});

// MAIL SEND GRAFICHE SOCIAL

document.getElementById("inviaMail").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Richiesta preventivo grafiche social";
    // Corpo predefinito
    var body = "Questo è il corpo della mail. Puoi modificare questo testo con ciò che desideri.";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});

/*
// TELEGRAM PACK
document.getElementById("mailtele").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Telegram Pack";
    // Corpo predefinito
    var body = "Questo è il corpo della mail. Puoi modificare questo testo con ciò che desideri.";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});
*/

// POPUP SELECTION
// Trigger e tutto il necessario
const popupTriggers = document.querySelectorAll('.popup-graphics, .alerts-popup, .include-animations-popup, .social-media-kit-popup, .support-popup');

// Quando passo il mouse su un testo voglio mostrare il popup
popupTriggers.forEach((element) => {
    element.addEventListener('mouseover', () => {
        let next = element.nextElementSibling;
        if (next.classList.contains('popup')) {
            next.style.display = 'block';
        }
    });
});

// Quando passo il mouse su un testo voglio mostrare il popup
popupTriggers.forEach((element) => {
    element.addEventListener('mouseleave', () => {
        let next = element.nextElementSibling;
        if (next.classList.contains('popup')) {
            next.style.display = 'none';
        }
    });
});

// Al caricamento della pagina, inietta gli elementi popup dove necessario
document.addEventListener('DOMContentLoaded', () => {
   // Una mappa di classi popup e contenuto HTML
    const popupMap = {
        'popup-graphics': '<p>Graphics for Twitch or Youtube or etc.</p>',
        'alerts-popup': '<p>Graphics updates if you change your mind.</p>',
        'include-animations-popup': '<p>Animated Graphics (Like intro or streaming overlays).</p>',
        'social-media-kit-popup': '<p>For every social like Instagram, TikTok etc....</p>',
        'support-popup': '<p>Support availability.</p>'
    };

    // Passa in rassegna le classi popup e inserisci HTML dopo ogni elemento
    for (let popupClass in popupMap) {
        let elements = document.querySelectorAll('.' + popupClass);
        for (let i = 0; i < elements.length; i++) {
            elements[i].insertAdjacentHTML('afterend', `<div class="popup" id="${popupClass}">${popupMap[popupClass]}</div>`);
        }
    }
});

const rectangle = document.querySelector('.rectangle');
const popup = document.getElementById('popup');

document.addEventListener('DOMContentLoaded', function() {
    const selection = window.getSelection().toString();
  if (selection) {
    const range = window.getSelection().getRangeAt(0);
    const rect = range.getBoundingClientRect();
    popup.style.display = 'block';
    popup.style.left = rect.left + 'px';
    popup.style.top = rect.bottom + '10px';
  }
});