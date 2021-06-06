// 1. Récupère le h1 dans une variable 
let h1 = document.querySelector("h1");


// 2. Créer un programme qui met le texte du h1 en bleu

//////h1.style.color = "blue"///////



// 3. Met ce programme dans une function
let fonct = () => {
    h1.style.color = "blue"
}


// 4. Appelle cette function pour qu'elle soit executé 
fonct()



// 5. Met un écouteur d'événement sur le h1, qui au clique lance la function
h1.addEventListener("click", fonct)










