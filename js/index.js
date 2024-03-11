console.log("JS Linked");
// Dark mode : Créer le code pour ajouter un dark mode au site SkillFacile

let darkMode = false;

const currentMode = document.getElementById("darkmode");
console.log(currentMode);
// const taToDesign = document.getElementsByClassName("secondary_main_title") ;
// const claToDesign = document.getElementsByTagName() ; // team


function changeDisplay() {
    console.log('entered func');
    if (currentMode.innerText === "Activer le darkmode") {
        darkMode = true;
        const tags = document.querySelectorAll("a, p, h3, i, .secondary_main_title");
        console.log(`Valeur de ${tags}:`);
        // const addTag = tags.classList;
        // addTag.add("darkmondeon");
        /* for (let i = 0; i < tags.length; i++) {
            //tag[i].classList;
            i.add("darkmondeon"); //tag.
        }*/
        tags.forEach((tag) => {
            tag.add("darkmondeon");//classList
        });
        currentMode.innerText = "Désactiver le darkmode";  
    } else if(currentMode.innerText === "Désactiver le darkmode"){
        darkMode = false;
        // const addTag = tags.classList;
        addTag.remove("darkmondeon");

        currentMode.innerText = "Activer le darkmode";
}};

currentMode.addEventListener("click", changeDisplay);
console.log(currentMode);

// Menu responsive : vous devez créer un menu responsive qui s'ouvre et se ferme, tel que représenté sur la vidéo de présentation. Petit bonus : faire la fermeture au scroll et la fermeture lorsqu'une modale s'ouvre

// modale inscription newsletter : Pour la modale de newsletter, vous devez utiliser les creatElement pour créer tous les éléments qui la compose. Bonus : Mettre en place un message lorsque l'utilisateur s'inscrit.


// Modale contact : Créer la modale de contact en utilisant la balise dialogue. Pour cette partie là, vous ne devez pas utiliser de creatElement. Bonus : Mettre en place un message lorsque l'utilisateur

// Bonus supplémentaire : Fermer le menu responsive a l'ouverture de la modale