
//=====================================

const Dragon = {
  name: 'Дракона',
  hp: 2500, // Жизненная энергия
  defense: 120, // Защита
  str: 150, // Сила
  weapon: 100,// Оружие
  showInfo: showInfo,
  modifyHealthDragon:modifyHealthDragon,
  attackDragon: attackDragon,

};

const Hero = {
  name: 'Героя',
  hp: 1000,// Жизненная энергия
  defense: 100,// Защита
  str: 120,// Сила
  weapon: 250,// Оружие
  shield: 150, // Щит
  isShieldEquipped : false,
  showInfo: showInfo,
  modifyHealth: modifyHealth,
  attack: attack,
  equipShield: equipShield,
  removeShield:removeShield,
}

const action = confirm('Добро пожаловать! Чтобы играть нажмите OK ');
while(true){
  if(action === null){
    break;
  }else{
    actionSwitch();
    if(Dragon.hp <= 0){
      break;
    }
    Dragon.attackDragon();// Дракон атакует
    if(Hero.hp <= 0){
      
      console.log('Дракон победил');
      break;
      
    }
  
  }
  
}









  


