import React from 'react';
import ReactDOM from 'react-dom';

console.log('index.js is running ')
  
const app ={
    title : 'React App',
    subtitle : 'I am keeping my efforts here',
    options: []
}

const onSubmit =(e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

   if (option){
       app.options.push(option);
       e.target.elements.option.value='';
       renderApp();
   }
  //console.log('form submitted');
}

   const removeAllClick = () =>
   {
      app.options =[]; 
      renderApp();
   }

   const onMakeDecision =() => {

    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);

   }

   //const numbers = [20,30,40,50];
    
    const appRoot= document.getElementById('root');
 
    const renderApp =() => {
        const template = (
            <div>
              <h1>{app.title}</h1>
              {app.subtitle && <p>{app.subtitle}</p>}
              <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
              <p>{app.options.length}</p>
              <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do ?</button>
              <button onClick={removeAllClick}>Remove All</button>
              {/* {
                numbers.map((number) => {
                    return <p key={number}>Number : {number} </p>
                })
              } */}
              <ol> 
                  {    
                    app.options.map((opt) => <li key={opt}>Option : {opt}</li>)
                 }
             </ol>    
             <form onSubmit={onSubmit}>
                 <input type='text' name='option'/>
                 <button>Add Option</button>
             </form>
            </div>
        );
        ReactDOM.render(template, appRoot);
    }
    renderApp();



