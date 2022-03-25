import React, {useState} from "react";
import './NewExpense.css'

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{

    const onSaveExpenseData = (newExpenseData)=>{
        const expenseData = {
            ...newExpenseData,
            id : Math.random().toString()
        };
        props.onNewData(expenseData);
        // console.log(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSave={onSaveExpenseData}/>
        </div>
    )
}

export default NewExpense;