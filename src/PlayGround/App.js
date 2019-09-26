import React from 'react';
import './App.css';
import { instance } from './axios';
//import {instance} from './axios';
var props ={
  name :"React"
 } ;
 
 let count = 0;
 const buttonId='someId';

 const addOne =() =>
 {
   count++;
 // console.log('add One ' + count);
 }

 const minusOne =() =>{
   count--;
  // console.log('minus One ' + count);
 }

 const reset = () => {
    count=0;
   //console.log('reset');
 }


const renderCounterApp = () =>{
  const App=() => {

    return (
      <div className="App">
        <h1>This is heading part</h1>
        <p>{props.name}</p>
        <ol>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          </ol>
     
      <div>
       <h1>
         Count : {count}
         </h1>
         <button id={buttonId} onClick={addOne} className="button">+1</button>
         <button onClick={minusOne}>-1</button>
         <button onClick={reset}>Reset</button>
  
      </div>
      </div>
    );
  }
}

const appRoot= document.getElementById('App');
ReactDOM.render(<App />,appRoot);

export default App;


function square(x) {
  return x*x;
}

// const squareArrow = (x) => {
//   return x*x;
// }

const squareArrow =(x) => x*x;

console.log(squareArrow(9));


const getFirstName = (name) =>
{
  return name.split(' ')[0];
}

const getFirstNameNew = (name) => name.split(' ')[1];
console.log(getFirstName('Mike Smith'));
console.log(getFirstNameNew('Mike Smith'));

const argumentFun = (a,b) => {
 // console.log(arguments);
  return a+b;
}
console.log(argumentFun(12,5,6,7,4,2,9,6));

const user = {
  name: 'Alex',
  cities : ['Hyd', 'sec', 'bang','chennai'],
  // printPlaceLeaved () {
  //   this.cities.forEach ((city) => {
  //      console.log(this.name + ' leaving in '+ city);
  //   });
 // }
   printPlaceLeaved(){
     return this.cities.map((city) => this.name +' living in '+city);
   }
};
console.log(user.printPlaceLeaved());

const multiplier = {

  numbers : [10,20,30],
  multiplyBy : 2,
  multiply () {
    return this.numbers.map((numbers) => numbers*this.multiplyBy);
  }
};
console.log(multiplier.multiply());





 export default App;
