var age = 17;

if (age > 18)
{
    console.log("Tu es majeur !");
}
else
{
    console.log("Tu es mineur !");
}

couleurs = ["bleu","rouge","vert","jaune","gris"];

var couleur = couleurs[Math.floor(Math.random()* couleurs.length)];

console.log(couleur);

if (couleur == "bleu")
{
    console.log("La couleur est bleue");
}
else if (couleur == "rouge")
{
    console.log("La couleur est rouge");
}
else if (couleur == "vert")
{
    console.log("La couleur est vert");
}
else if (couleur == "jaune")
{
    console.log("La couleur est jaune");
}
else if (couleur == "gris")
{
    console.log("La couleur est gris");
}

switch (couleur){
    case "bleu":
        console.log("La couleur est bleue");
        break;
    
    case "rouge":
        console.log("La couleur est rouge");
        break;
    
    case "vert":
        console.log("La couleur est vert");
        break;

    case "jaune"
}