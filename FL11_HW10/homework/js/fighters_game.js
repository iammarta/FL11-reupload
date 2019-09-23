class Fighter {
    constructor({name, damage, hp, agility}){
        this.name = name;
        this.damage = damage;
        this.hp = hp;
        this.agility = agility;
        this.losses = 0;
        this.wins = 0;
    }
    getName(){
        return this.name;
    }
    getDamage(){
        return this.damage;
    }
    getHealth(){
        return this.hp;
    }
    getAgility(){
        return this.agility;
    }
    heal(health) {
        if (health > this.hp){
           this.hp = this.hp;
    } else {
         this.hp += health;
    }
    }
    dealDamage(damage){
        if(this.hp < damage){
             this.hp = 0;
        } else{
            this.hp -= damage;
        }
            }
            attack(defFighter) {
                const number = 100;
                const attack = Math.random() * number < number - defFighter.getAgility();
            
                if (attack) {
                  defFighter.dealDamage(this.getDamage());
                  console.log(`${this.getName()} make ${this.getDamage()} to ${defFighter.getName()}`);
                } else {
                  console.log(`${this.getName()} attack missed`);
                }
              }
            addWin() {
                this.wins += 1;
              }
            
              addLoss() {
                this.losses += 1;
              }
              logCombatHistory(){
                return `Name: ${this.getName()}, Wins: ${this.wins}, Losses: ${this.losses}`;
              }
}

function battle(fighter1, fighter2) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
  
    this.fighter1Alive = !!this.fighter1.getHealth();
    this.fighter2Alive = !!this.fighter2.getHealth();
  
    if (!this.fighter1Alive) {
      return console.log(`${this.fighter1.getName()} is dead and cant't fight`);
    } else if (!this.fighter2Alive) {
      return console.log(`${this.fighter2.getName()} is dead and cant't fight`);
    }
  
    let i = 1;
    const number = 2;
  
    while (this.fighter1Alive && this.fighter2Alive) {
      if (i % number) {
        this.fighter1.attack(this.fighter2);
      } else {
        this.fighter2.attack(this.fighter1);
      }
  
      this.fighter1Alive = !!this.fighter1.getHealth();
      this.fighter2Alive = !!this.fighter2.getHealth();
  
      i++;
    }
  
    if (this.fighter1Alive) {
      this.fighter1.addWin();
      this.fighter2.addLoss();
    } else if (this.fighter2Alive) {
      this.fighter2.addWin();
      this.fighter1.addLoss();
    }
  }
  

const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 50});
const fighter2 = new Fighter({name: 'Jack', damage: 25, hp: 150, agility: 10});

console.log(fighter1);
console.log(fighter2);

battle(fighter1, fighter2);

console.log('fighter1.logCombatHistory ', fighter1.logCombatHistory());
console.log('fighter2.logCombatHistory ', fighter2.logCombatHistory());

const heal = 100;

fighter1.heal(heal);
fighter2.heal(heal);

battle(fighter2, fighter1);

console.log('fighter1.logCombatHistory ', fighter1.logCombatHistory());
console.log('fighter2.logCombatHistory ', fighter2.logCombatHistory());

battle(fighter2, fighter1);


