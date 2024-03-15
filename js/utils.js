
const getRandomInt = (value) => Math.random() < (value/100);


const showInfo = function() {

  const message = `HP у ${this.name} == ${this.hp}`;
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


const attackDragon = function() {

  if(getRandomInt(50)){

    this.modifyHealthDragon();
    Hero.showInfo();

  }else{

    const messageDragon = `Дракон не стал атаковать героя =(\n=======================`;
    console.log(messageDragon);

  }


}

const equipShield = function(){
  if(!this.isShieldEquipped){
    this.isShieldEquipped = true;
    this.defense += this.shield;
    console.log(this.defense);
  }else{
    console.log(`Герой уже носит щит! Текущая защита - ${this.defense} \n=====================`);
  }
}
const removeShield = function(){
  if(this.isShieldEquipped){
    this.isShieldEquipped = false;
    this.defense -= this.shield;
    console.log(this.defense);
  }
  else{
    console.log(`Не может снять щит, потому что он не экипирован! Текущая защита - ${this.defense} \n=====================`);
  }
}
const actionSwitch = function (){
  const action = prompt('Напишите одно из цифр чтобы выполнить одно из действие: 1)будет атаковать 2)Ниче не делать 3)защищаться');
  switch (action) {
    case '1':
      Hero.removeShield();
      Hero.attack();// Герой атакует

      if(Dragon.hp <= 0){ //Если у дракона будет жизнь меньше или равно нулью 
        
        console.log('Герой победил');//Герой победил
        break;
        
      }
      break;
    
    case '2':
      alert('Герой пропустил ход')
      break;
    case '3':
      Hero.equipShield();
      break;
    case '':
      break;
    default:
      alert('Введите цифр')
      break;
        
  }
}
