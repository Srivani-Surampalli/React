import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';



const ExportListItem = ({dispatch, id, description,amount,createdAt}) => (
    <div>
        <h3>Description:{description}</h3>
       <p>amount : {amount} - {createdAt} </p>
       <button onClick={()=>{
    dispatch(removeExpense({id}))
 }}>Remove</button>
    </div>


);



export default connect()(ExportListItem);