import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
 //import * as serviceWorker from './serviceWorker';

// //ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
 //serviceWorker.unregister();


let count = 0;
const buttonId='someId';

const addOne =() =>
{
  count++;
  renderCounterApp();
// console.log('add One ' + count);
}

const minusOne =() =>{
  count--;
  renderCounterApp();
 // console.log('minus One ' + count);
}

const reset = () => {
   count=0;
   renderCounterApp();
  //console.log('reset');
}

const appRoot= document.getElementById('root');

const renderCounterApp = () =>{
 const template = (
     
     <div>
      <h1>Count : {count}</h1>
        <button id={buttonId} onClick={addOne} className="botton">+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
     </div>

 );
 ReactDOM.render(template, appRoot);
};


renderCounterApp();


////////Component //////////////////
class Counter extends React.Component {
    
  constructor(props){
      super(props);
      this.handleAddOne=this.handleAddOne.bind(this);
      this.handleMinusOne=this.handleMinusOne.bind(this);
      this.handleReset=this.handleReset.bind(this);
      this.state= {
        count : props.count
      }
  }

  handleAddOne(){
      this.setState((prevState) => {
        return  {count: prevState.count + 1};
      })
  }

  handleMinusOne(){
     this.setState((prevState) => {
         return {count: prevState.count - 1};
     })
  }

  handleReset(){
      this.setState(()=> {
          return {count:0}; 
      }
      )
  }

  render() {
      return(
          <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.handleAddOne}>+1</button>
              <button onClick={this.handleMinusOne}>-1</button>
              <button onClick={this.handleReset}>reset</button>
          </div>
      )
  }
}

Counter.defaultProps = {
  count :0
};

ReactDOM.render(<Counter />, document.getElementById('root'))
