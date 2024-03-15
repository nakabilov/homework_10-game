
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
  equipShield (){
    if(!this.isShieldEquipped){
      this.isShieldEquipped = true;
      this.defense += this.shield;
      console.log(this.defense);
    }else{
      console.log(`Герой уже носит щит! ${this.defense}`);
    }
  },
  removeShield (){
    if(this.isShieldEquipped){
      this.isShieldEquipped = false;
      this.defense -= this.shield;
      console.log(this.defense);
    }
    else{
      console.log(`не может снять щит, потому что он не экипирован! ${this.defense}`);
    }
  }

};

while(true){

  Hero.attack();// Герой атакует
  
  if(Dragon.hp <= 0){ //Если удракона будет жизнь меньше или равно нулью 
    
    console.log('Герой победил');//Герой победил
    break;
    
  }
  Dragon.attackDragon();// Дракон атакует
  if(Hero.hp <= 0){
    
    console.log('Дракон победил');
    break;
    
  }
  
}



// Уровень 3
// Добавить возможность выбирать, что герой будет делать:
// ● Атаковать (в этом случае производятся все действия, как и в 1-м уровне задания)
// ● Ничего не делать
// ● Защищаться
// ● Щит (shield) героя прибавляется к значению защиты (defense) героя
// ● Если выбрано действие “защищаться”, то увеличенное значение защиты
// действует только на текущий ход (до следующего действия героя).
// Указания:
// ● Добавить герою методы equipShield и removeShield, которые будут добавлять и
// отнимать у него количество щита к общей защите. При этом нужно произвести
// проверку, что щит был экипирован раньше, чтобы не добавлять двойную порцию
// щита, или не убавлять защиту меньше, чем базовая защита. Для этого можно
// ввести булевое свойство isShieldEquipped, которое должно ставиться и убираться
// в этом методе при успешной экипировке и успешном снятии. При попытке снять не
// одетый щит или одеть щит, который уже был одет, выводить в консоль
// соответствующие сообщения.


function performAction(hero, action) {
  switch (action) {
      case 'attack':
          return hero + ' атакует врага!';
      case 'defend':
          return hero + ' защищается от атаки врага.';
      case 'heal':
          return hero + ' лечит свои раны.';
      default:
          return 'Неизвестное действие для героя ' + hero + '.';
  }
}

// Пример использования:
console.log(performAction('Рыцарь', 'attack')); // Рыцарь атакует врага!





  


