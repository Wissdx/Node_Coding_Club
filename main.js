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

for (let i; i<couleurs2.length; i++)
{

    var couleur3 = couleurs2[i];
    console.log(couleur3);
    
    switch (i){

        case "bleu":
        console.log("La couleur à l'index " + i + " est bleue !");
        break;
    
        case "rouge":
            console.log("La couleur " + i + " est rouge !");
            break;
        
        case "vert":
            console.log("La couleur " + i + " est vert !");
            break;

        case "jaune":
            console.log("La couleur " + i + " est jaune !");
            break;

        default:
            console.log("La couleur n'était pas attendue !");
    }

}