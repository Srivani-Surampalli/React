//state:
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import axios from 'axios';


const initialState = {
    loading :false,
    users:[],
    error:''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'

const FETCH_USER_SUCCESS ='FETCH_USER_SUCCESS'

const FETCH_USER_ERROR ='FETCH_USER_ERROR'

const fetchUserRequest =() => {
        return {
            type:FETCH_USER_REQUEST
        }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure= (error) => {
    return {
        type : FETCH_USER_ERROR,
        payload:error
    }
}

const reducer = (state =initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST :
            return{
                ...state,
                loading: true
            };
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                users:action.payload,
                loading:false,
                error: ''
            };
        case FETCH_USER_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(response => {
         const users=response.data.map(users => users.name)
        dispatch(fetchUsersSuccess(users))
     })
     .catch( error => {
         dispatch(fetchUsersFailure(error.message))
     })
    }

}
const store = createStore(reducer,applyMiddleware(thunkMiddleWare));

store.subscribe( () => {console.log(store.getState())})

store.dispatch(fetchUsers);



