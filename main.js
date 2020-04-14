var age = 17;

if (age > 18)
{
    console.log("Tu es majeur !");
}
else
{
    console.log("Tu es mineur !");
}

// couleurs = ["bleu","rouge","vert","jaune","gris"];

// var couleur = couleurs[Math.floor(Math.random()* couleurs.length)];

// switch (couleur){
//     case "bleu":
//         console.log("La couleur est bleue");
//         break;
    
//     case "rouge":
//         console.log("La couleur est rouge");
//         break;
    
//     case "vert":
//         console.log("La couleur est vert");
//         break;

//     case "jaune":
//         console.log("La couleur est jaune");
//         break;

//     case "gris":
//         console.log("La couleur est gris");
//         break;
// }

couleurs2 = ["bleu","rouge","vert","jaune"];

for (let i = 0; i<couleurs2.length; i++)
{

    var couleur3 = couleurs2[i];

    switch (couleur3){

        case "bleu":
        console.log("La couleur à l'index " + i + " est bleue !\n");
        break;
    
        case "rouge":
            console.log("La couleur " + i + " est rouge !\n");
            break;
        
        case "vert":
            console.log("La couleur " + i + " est vert !\n");
            break;

        case "jaune":
            console.log("La couleur " + i + " est jaune !\n");
            break;

        default:
            console.log("La couleur n'était pas attendue !\n");
    }

}

function addition(number1, number2)
{
    let result = number1 + number2;
    let phraseresult = "L'addition de " + number1 + " et " + number2 + " donne " + result;
    return phraseresult;
}

console.log(addition(3,5))