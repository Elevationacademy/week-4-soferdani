class Player {
    constructor(name) {
        this.name = name
    }

    say (massage) {
        console.log(`${this.name}: ${massage}`);
    }
}

module.exports = Player

