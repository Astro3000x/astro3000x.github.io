// All translations stored locally (no fetch needed)
const translations = {
    en: { intro: "Welcome to my website!\nI am a developer, guitarist, and high school student.\nHere are some photos I took:" },
    fr: { intro: "Bienvenue sur mon site !\nJe suis développeur, guitariste et lycéen.\nVoici quelques photos que j'ai prises :" },
    hu: { intro: "Üdvözöllek a weboldalamon!\nFejlesztő, gitáros és középiskolás diák vagyok.\nÍme néhány fotó, amit készítettem:" }
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
