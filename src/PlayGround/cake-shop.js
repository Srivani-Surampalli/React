import {createStore,combineReducers} from 'redux';
const BUY_CAKE ='BUY_CAKE'
const BUY_ICECREAMS = 'BUT_ICECREAMS'


//Action Creator
function buyCake() {
    return {
        type: BUY_CAKE,        //Action
        info: 'Information'
    }
}

function buyIceCreams() {
    return {
        type:BUY_ICECREAMS
    }
}

//Reducer

//(PrevState,action) => newState

const intialStateOfItems = {
     noOfItems:10,
 
}
const intialStateOfIceCreams = {
    noOfIcecreams:20
}

const reducerItems = ({state=intialStateOfItems}={} ,action) => {
    switch(action.type) {
      case BUY_CAKE:
          return {
              ...state,
              noOfItems: state.noOfItems -1
          };
      default: return state;
    }
}

const reducerIceCream = ({state=intialStateOfIceCreams}={} ,action) => {
    switch(action.type) {
      case BUY_ICECREAMS:
          return {
             ...state,
              noOfIcecreams: state.noOfIcecreams - 1
          }
      default: return state;
    }
}

const combineRed = combineReducers({
    items:reducerItems,
    iceCream:reducerIceCream
})

const store =createStore(combineRed);
console.log('Initial State', store.getState());
const unsubscribe= store.subscribe(()=> {
    console.log('Updated state',store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

unsubscribe();

