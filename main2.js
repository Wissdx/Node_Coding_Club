const personnage = {
	nom: "Pendragon",
	prenom: "Arthur",
	sexe: "homme",
	tenue: "Armure",
	inventaire: ["Epée", "Couteau", "Gourde"],

	description() {
		return (`Vous avez choisi le personnage ${this.prenom} ${this.nom}, c'est un ${this.sexe} en ${this.tenue}.\nVoici le contenu de son inventaire : ${this.inventaire.sort()}`)
	}
};

console.log(personnage.description());