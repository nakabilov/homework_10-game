
const getRandomInt = (value) => Math.random() < (value/100);


const showInfo = function() {

  const message = `HP у ${this.name} ${this.hp}`;
  console.log(message);
  console.log('============================');
  
}


const modifyHealth = function () {

  const damage = this.str + this.weapon - Dragon.defense;
  Dragon.hp -= damage;
  const message = `Герой попал по дракону, урон => ${damage}`;
  console.log(message);

}

const modifyHealthDragon = function(){

  const damageDragon = this.str + this.weapon - Hero.defense;
  Hero.hp -= damageDragon;
  const messageDragon = `Дракон попал по герою, урон => ${damageDragon}`;
  console.log(messageDragon);
  
}

const attack = function() {
    

  if (getRandomInt(75)) {

    this.modifyHealth();
    Dragon.showInfo();
    
  }else {

    const message = `Герой промахнулся =(\n=======================`;
    console.log(message);

  }
}