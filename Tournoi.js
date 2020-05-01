class Personnage {
	constructor(name, health, armor, strength, xp, level){
		this.name = name;
		this.health = health;
		this.armor = armor;
		this.strength = strength;
		this.xp = 0;
		this.level = 1;
	}

	description(){
		return `Le personnage ${this.name} possède ${this.health} PV, ${this.armor} points d'armure et ${this.strength} points de force.\nIl a ${this.xp} xp et ${this.level} niveau(x)`
	}

}