// HAMBURGER MENU
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarLinks = document.getElementById("menu");

hamburgerMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
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
document.getElementById("mailyoutube").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Graphic For Youtube";
    // Corpo predefinito
    var body = "Ciao, sarei interessato a questo servizio di (scegliere tra logo, banner, miniatura per i video, notifiche del tipo che si è iscritto o donazione, trasizione) ";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});


// STANDARD GRAPHIC PACK  
document.getElementById("mailtwitch").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = " Graphic For Twitch";
    // Corpo predefinito
    var body = "Ciao, sarei interessato a questo servizio di (scegliere tra logo, banner, notifiche del tipo che si è iscritto o donazione, trasizione) ";

    // Costruisci il link mailto con i dettagli predefiniti
    var linkMailto = "mailto:" + destination + "?subject=" + encodeURIComponent(object) + "&body=" + encodeURIComponent(body);

    // Apri la mailto URL
    window.location.href = linkMailto;
});

// MEDIUM GRAPHIC PACK  
document.getElementById("mailinstagram").addEventListener("click", function() {
    // Destinatario predefinito
    var destination = "info@lukeskyfalker.eu";
    // Oggetto predefinito
    var object = "Graphic For Instagram";
    // Corpo predefinito
    var body = "Ciao, sarei interessato a questo servizio di logo";

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
    var object = "Richiesta preventivo grafiche per instagram";
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