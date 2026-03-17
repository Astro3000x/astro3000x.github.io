// All translations stored locally (no fetch needed)
const translations = {
    en: { intro: "Welcome to my website!\nI am a developer, guitarist, and high school student.\nHere are some photos I took:",
        quote1: "From where you're kneeling it must seem like an 18-carat run of bad luck. Truth is... the game was rigged from the start. -- Benny (Fallout: New Vegas)",
        quote2: "You can't conceive of what I'm capable of! I'm so far beyond you! I'm like a god in human clothing! Lighting bolts shoot from my fingertips!\n-- James Morgan McGill (Better Call Saul)",
        quote3: "I am not crazy! I know he swapped those numbers. I knew it was 1216. One after Magna Carta. As if I could ever make such a mistake. Never. Never! I just - I just couldn't prove it. -- Chuck McGill (Better Call Saul)",
        quote4: "War, war never changes. -- Narrator (Fallout: New Vegas)",
        studynest: "StudyNest is a web app that has tools for studying and focus.\nI made it for Student HackPad 2025, where it placed in the top 24-85 out of 215.",
        projectstitle: "Projects:",
        projectssubtitle: "These are some of my projects:",
        transitinfo: "TransitInfo is a web app that provides real-time public transit information for Metro Vancouver.\nI developed it using Translink's GTFS API and Leaflet.\nOn the backend, it uses Python with Flask." },
    fr: { intro: "Bienvenue sur mon site !\nJe suis développeur, guitariste et lycéen.\nVoici quelques photos que j'ai prises :",
        quote1: "From where you're kneeling it must seem like an 18-carat run of bad luck. Truth is... the game was rigged from the start. -- Benny (Fallout: New Vegas)",
        quote2: "You can't conceive of what I'm capable of! I'm so far beyond you! I'm like a god in human clothing! Lighting bolts shoot from my fingertips!\n-- Saul Goodman/James Morgan McGill (Better Call Saul)",
        quote3: "I am not crazy! I know he swapped those numbers. I knew it was 1216. One after Magna Carta. As if I could ever make such a mistake. Never. Never! I just - I just couldn't prove it. -- Chuck McGill (Better Call Saul)",
        quote4: "War, war never changes. -- Narrator (Fallout: New Vegas)",
        studynest: "StudyNest est une application web qui propose des outils pour étudier et se concentrer.\nJe l'ai créé pour Student HackPad 2025, où il s'est classé parmi les 24-85 meilleurs sur 215.",
        projectstitle: "Projets:",
        projectssubtitle: "Voici quelques-uns de mes projets:",
        transitinfo: "TransitInfo est une application web qui fournit des informations en temps réel sur les transports en commun pour le Grand Vancouver.\nJe l'ai développé en utilisant l'API GTFS de Translink et Leaflet.\nCôté serveur, il utilise Python avec Flask." },
    hu: { intro: "Üdvözöllek a weboldalamon!\nFejlesztő, gitáros és középiskolás diák vagyok.\nÍme néhány fotó, amit készítettem:",
        quote2: "You can't conceive of what I'm capable of! I'm so far beyond you! I'm like a god in human clothing! Lighting bolts shoot from my fingertips!\n-- Saul Goodman/James Morgan McGill (Better Call Saul)",
        quote3: "I am not crazy! I know he swapped those numbers. I knew it was 1216. One after Magna Carta. As if I could ever make such a mistake. Never. Never! I just - I just couldn't prove it. -- Chuck McGill (Better Call Saul)",
        quote1: "From where you're kneeling it must seem like an 18-carat run of bad luck. Truth is... the game was rigged from the start. -- Benny (Fallout: New Vegas)",
        quote4: "War, war never changes. -- Narrator (Fallout: New Vegas)",
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

function chooseQuote() {
    const keys = ["quote1", "quote2", "quote3", "quote4"];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById("quote").dataset.key = randomKey;
    console.log(randomKey);
};

chooseQuote();

tspawnaudio = new Audio("audio/tspawn.mp3")

function tspawn() {
    tspawnaudio.play();
}

let songs = ["https://www.youtube.com/watch?v=EPUMoXhmNWI"]
function music() {
    window.open(songs[Math.floor(Math.random() * songs.length)], "_blank");
}

function showReset() {
    document.getElementById("reset").style.display = "block";
    document.getElementById("functions").style.display = "none";
}

function reset() {
    window.location.reload();
}

const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

let px = 0;

/*const scale = 30;

const centerX = Math.floor(canvas.width / (2 * scale)) * scale;
const centerY = Math.floor(canvas.height / (2 * scale)) * scale;

// Draw axes
ctx.beginPath();

// Y-axis (vertical line)
ctx.moveTo(centerX, 0);
ctx.lineTo(centerX, canvas.height);

// X-axis (horizontal line)
ctx.moveTo(0, centerY);
ctx.lineTo(canvas.width, centerY);

ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();*/

function startXsquared() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    px = 0;

    ctx.beginPath();

    requestAnimationFrame(drawStepXsquared);
    showReset();
}

function drawStepXsquared() {

    const scale = 30;

    const centerX = Math.floor(canvas.width / (2 * scale)) * scale;
    const centerY = Math.floor(canvas.height / (2 * scale)) * scale;

    let x = (px - centerX) / scale;

    let y = x * x;

    let py = centerY - y * scale;

    if (px === 0) {
        ctx.moveTo(px, py);
    } else {
        ctx.lineTo(px, py);
    }

    ctx.strokeStyle = "#800000";
    ctx.lineWidth = 2;
    ctx.stroke();

    px += 5;

    if (px < canvas.width) {
        requestAnimationFrame(drawStepXsquared);
    }
}


function startXplus2() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    px = 0;

    ctx.beginPath();

    requestAnimationFrame(drawStepXplus2);
    showReset();
}

function drawStepXplus2() {

    const scale = 30;

    const centerX = Math.floor(canvas.width / (2 * scale)) * scale;
    const centerY = Math.floor(canvas.height / (2 * scale)) * scale;

    let x = (px - centerX) / scale;

    let y = x + 2;

    let py = centerY - y * scale;

    if (px === 0) {
        ctx.moveTo(px, py);
    } else {
        ctx.lineTo(px, py);
    }

    ctx.strokeStyle = "#800000";
    ctx.lineWidth = 2;
    ctx.stroke();

    px += 5;

    if (px < canvas.width) {
        requestAnimationFrame(drawStepXplus2);
    }
}

function startXcubed() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    px = 0;

    ctx.beginPath();

    requestAnimationFrame(drawStepXcubed);
    showReset();
}

function drawStepXcubed() {

    const scale = 30;

    const centerX = Math.floor(canvas.width / (2 * scale)) * scale;
    const centerY = Math.floor(canvas.height / (2 * scale)) * scale;

    let x = (px - centerX) / scale;

    let y = x * x * x;

    let py = centerY - y * scale;

    if (px === 0) {
        ctx.moveTo(px, py);
    } else {
        ctx.lineTo(px, py);
    }

    ctx.strokeStyle = "#800000";
    ctx.lineWidth = 2;
    ctx.stroke();

    px += 5;

    if (px < canvas.width) {
        requestAnimationFrame(drawStepXcubed);
    }
}


function startFunc4() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    px = 0;

    ctx.beginPath();

    requestAnimationFrame(drawStepFunc4);
    showReset();
}

function drawStepFunc4() {

    const scale = 30;

    const centerX = Math.floor(canvas.width / (2 * scale)) * scale;
    const centerY = Math.floor(canvas.height / (2 * scale)) * scale;

    let x = (px - centerX) / scale;

    let y = (4 * (x * x)) + (3 * x) + (2);
    //let y = (4 * (x^2)) + (3 * x) + (2);

    let py = centerY - y * scale;

    if (px === 0) {
        ctx.moveTo(px, py);
    } else {
        ctx.lineTo(px, py);
    }

    ctx.strokeStyle = "#800000";
    ctx.lineWidth = 2;
    ctx.stroke();

    px += 5;

    if (px < canvas.width) {
        requestAnimationFrame(drawStepFunc4);
    }

    console.log(4)
}

