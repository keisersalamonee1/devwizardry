// Create a class named DevWizardry
class DevWizardry {
    constructor() {
        this.spells = [];
    }

    // Method: learn a new spell
    learnSpell(spell) {
        this.spells.push(spell);
        console.log(`Learned a new spell: ${spell}`);
    }

    // Method: cast a spell
    castSpell(spell) {
        if (this.spells.includes(spell)) {
            console.log(`Casting spell: ${spell}`);
            // Add your spell casting logic here
        } else {
            console.log(`Unable to cast spell. Spell "${spell}" not learned.`);
        }
    }

    // Method: forget a spell
    forgetSpell(spell) {
        const index = this.spells.indexOf(spell);
        if (index !== -1) {
            this.spells.splice(index, 1);
            console.log(`Forgot spell: ${spell}`);
        } else {
            console.log(`Spell "${spell}" not found.`);
        }
    }

    // Method: list all learned spells
    listSpells() {
        console.log("Learned spells:");
        this.spells.forEach(spell => {
            console.log(spell);
        });
    }
}

// Create an instance of DevWizardry named myDevWizardry
const myDevWizardry = new DevWizardry();

// Learn new spells
myDevWizardry.learnSpell("Fireball");
myDevWizardry.learnSpell("Invisibility");

// List all learned spells
myDevWizardry.listSpells();

// Cast a spell
myDevWizardry.castSpell("Fireball");

// Forget a spell
myDevWizardry.forgetSpell("Invisibility");

// List all learned spells after forgetting
myDevWizardry.listSpells();
