
//=====================================

const Dragon = {
  name: 'Дракона',
  hp: 2500, // Жизненная энергия
  defense: 120, // Защита
  str: 150, // Сила
  weapon: 100,// Оружие
  showInfo: showInfo,
  modifyHealthDragon:modifyHealthDragon,
  attackDragon () {
    if(getRandomInt(50)){
      this.modifyHealthDragon();
      Hero.showInfo();
    }else{
      const messageDragon = `Дракон не стал атаковать героя =(\n=======================`;
      console.log(messageDragon);
    }
  }
};

const Hero = {
  name: 'Героя',
  hp: 1000,// Жизненная энергия
  defense: 100,// Защита
  str: 120,// Сила
  weapon: 250,// Оружие
  shield: 150, // Щит
  showInfo: showInfo,
  modifyHealth: modifyHealth,
  attack: attack,
};

while(true){

  Hero.attack();
  
  if(Dragon.hp <= 0){
    
    console.log('Герой победил');
    break;
    
  }
  Dragon.attackDragon();
  if(Hero.hp <= 0){
    
    console.log('Дракон победил');
    break;
    
  }
  
}








  


