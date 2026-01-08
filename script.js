// All translations stored locally (no fetch needed)
const translations = {
    en: { intro: "Welcome to my website!\nI am a developer, guitarist, and high school student.\nHere are some photos I took:",
        quote: "From where you're kneeling it must seem like an 18-carat run of bad luck. Truth is... the game was rigged from the start. (Fallout: New Vegas)",
        studynest: "StudyNest is a web app that has tools for studying and focus.\nI made it for Student HackPad 2025, where it placed in the top 24-85 out of 215.",
        projectstitle: "Projects:",
        projectssubtitle: "These are some of my projects:",
        transitinfo: "TransitInfo is a web app that provides real-time public transit information for Metro Vancouver.\nI developed it using Translink's GTFS API and Leaflet.\nOn the backend, it uses Python with Flask." },
    fr: { intro: "Bienvenue sur mon site !\nJe suis développeur, guitariste et lycéen.\nVoici quelques photos que j'ai prises :",
        quote: "From where you're kneeling it must seem like an 18-carat run of bad luck. Truth is... the game was rigged from the start. (Fallout: New Vegas)",
        studynest: "StudyNest est une application web qui propose des outils pour étudier et se concentrer.\nJe l'ai créé pour Student HackPad 2025, où il s'est classé parmi les 24-85 meilleurs sur 215.",
        projectstitle: "Projets:",
        projectssubtitle: "Voici quelques-uns de mes projets:",
        transitinfo: "TransitInfo est une application web qui fournit des informations en temps réel sur les transports en commun pour le Grand Vancouver.\nJe l'ai développé en utilisant l'API GTFS de Translink et Leaflet.\nCôté serveur, il utilise Python avec Flask." },
    hu: { intro: "Üdvözöllek a weboldalamon!\nFejlesztő, gitáros és középiskolás diák vagyok.\nÍme néhány fotó, amit készítettem:",
        quote: "From where you're kneeling it must seem like an 18-carat run of bad luck. Truth is... the game was rigged from the start. (Fallout: New Vegas)",
        studynest: "A StudyNest egy webes alkalmazás, amely eszközöket kínál a tanuláshoz és a koncentrációhoz.\nA 2025-ös Student HackPad versenyre készítettem, ahol 215-ből a legjobb 24-85 közé került..",
        projectstitle: "Projektek:",
        projectssubtitle: "Íme néhány projektem:",
        transitinfo: "A TransitInfo egy webes alkalmazás, amely valós idejű tömegközlekedési információkat nyújt a Metro Vancouver számára.\nA Translink GTFS API-ját és a Leafletet használtam a fejlesztéséhez.\nA szerver oldalon Pythont használ Flask-kel." }
};

document.addEventListener("DOMContentLoaded", () => {
    // Globe icon + dropdown menu
    const globe = document.getElementById("lang-icon");
    const dropdown = document.getElementById("lang-dropdown");

    globe.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    dropdown.querySelectorAll("div").forEach(option => {
        option.addEventListener("click", () => {
            const lang = option.getAttribute("data-lang");

            // update all text
            document.querySelectorAll("[data-key]").forEach(el => {
                const key = el.getAttribute("data-key");
                el.textContent = translations[lang][key];
            });

            dropdown.style.display = "none"; // close menu
        });
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", (e) => {
        if (!document.getElementById("lang-container").contains(e.target)) {
            dropdown.style.display = "none";
        }
    });

    // Optionally: set default language
    const defaultLang = "en";
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[defaultLang][key];
    });
});
/*
function spinImage() {
    document.getElementById("imagetospin").style.transform = "rotate(1deg)"
}

let i = true

while (i = true) {
    setTimeout(() => {
        spinImage()
    }, 100);
}
*/
