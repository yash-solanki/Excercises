'use strict';
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    
    super(name);
    this.name = name;
    this.earLength = earLength;
  }

 
   eat( vegfood , times) {
    this.vegfood = vegfood;
    this.times = times;
    alert(`"${this.name}" Eats: ${vegfood} "${this.times}" times a day`);
  }
}

class BabyRabbit extends Rabbit{
  constructor(name,sname) {
    super(name,2);
   this.sname=sname;
  }

  eat( vegfood , times) {
    super.eat(vegfood , times);
    this.vegfood = vegfood;
    this.times = times;
    alert(`"${this.sname}" Eats: ${vegfood} "${this.times}" times a day`);
  }
}

let babyrabbit = new BabyRabbit("White Rabbit","Baby Rabbit"); 
alert(babyrabbit.name);


babyrabbit.eat("carrot",10);