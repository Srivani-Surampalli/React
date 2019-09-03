class Person {
    constructor (name = 'test', age = 0) { 
    this.name = name;
    this.age = age;
    }  
    getGreetings() {
    // return 'Hi ' + this.name + '!';
    return `Hi,i am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
   }
   
   class Student extends Person {
    constructor(name, age, major){
        super(name,age);
        this.major =major;
    }
   }
    class Travel extends Person{
          constructor(name, age,homeLocation){
              super(name,age);
              this.homeLocation=homeLocation
          }
          hasHomeLocation(){
              return !!this.homeLocation;
          }
          getGreetings(){
              let greetings =super.getGreetings();
              if(this.homeLocation){
                  greetings += ` I am visiting ${this.homeLocation}.`;
              }
              return greetings;
          }
    }

   const me = new Travel('React', 26,'Hyderabad');
   console.log(me.getGreetings())
  // console.log(me.getDescription())

   const user = new Travel();
    console.log(user.getGreetings())
  //  console.log(user.getDescription())