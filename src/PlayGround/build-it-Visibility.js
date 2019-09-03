import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

console.log('index.js is running ')

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
   render();
};

const appRoot= document.getElementById('root');

const render = () => {
    const JSX = (
     <div>
         <h1>Visibility Toggle</h1>
         <button onClick={toggleVisibility}> {visibility ? 'Hide details' : 'Show details'}</button>
         { visibility && (
          <div>
              <p>Here are the details to see !</p>
          </div>
        )}
    </div>
    );
    ReactDOM.render(JSX, appRoot);
};

render();


/////////////////////Component ////////////////////////////////


class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility =this.toggleVisibility.bind(this);
       this.state = {
          visibility : false
        };
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : ! prevState.visibility,
              
            };
        })

    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleVisibility}> {this.state.visibility ? 'Hide details' : 'Show details'}</button>
            { this.state.visibility && (
             <div>
                 <p>Here are the details to see !</p>
             </div>
           )}
       </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('root'))