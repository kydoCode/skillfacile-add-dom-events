console.log("JS Linked");
// Dark mode : Créer le code pour ajouter un dark mode au site SkillFacile

const currentMode = document.getElementById("darkmode");
let isOff = "Activer le darkmode"; 
let isOn = "Désactiver le darkmode";
let claValue = "darkmondeon";
let selectors = "a:not(footer > .paddings_responsive > article > ul > li > a, .inscription_button), body, p:not(footer > .paddings_responsive > article > p), #team .teamworker h3, .burger_menu i, .secondary_main_title";

const tags = document.querySelectorAll(selectors);
const logo = document.getElementById("logo");

function changeDisplay() {
    if (currentMode.innerText === isOff) {
        tags.forEach((tag) => {
            tag.classList.add(claValue);
        });
        currentMode.innerText = isOn;  
        logo.src = "img/logo-blanc.png";
    } else if(currentMode.innerText === isOn){
        tags.forEach((tag) => {
            tag.classList.remove(claValue);
        });
        logo.src = "img/logo-noir.png";
        currentMode.innerText = isOff;
}};

currentMode.addEventListener("click", changeDisplay);
console.log(currentMode);

// Menu responsive : vous devez créer un menu responsive qui s'ouvre et se ferme, tel que représenté sur la vidéo de présentation. Petit bonus : faire la fermeture au scroll et la fermeture lorsqu'une modale s'ouvre

// modale inscription newsletter : Pour la modale de newsletter, vous devez utiliser les creatElement pour créer tous les éléments qui la compose. Bonus : Mettre en place un message lorsque l'utilisateur s'inscrit.


// Modale contact : Créer la modale de contact en utilisant la balise dialogue. Pour cette partie là, vous ne devez pas utiliser de creatElement. Bonus : Mettre en place un message lorsque l'utilisateur

// Bonus supplémentaire : Fermer le menu responsive a l'ouverture de la modale