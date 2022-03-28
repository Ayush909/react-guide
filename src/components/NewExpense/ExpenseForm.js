import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    const [isFormVisible,setFormVisible] = useState(false);

    const [EnteredTitle,setEnteredTitle] = useState('');
    const [EnteredAmount,setEnteredAmount] = useState('');
    const [EnteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = (e) =>{
        setEnteredDate(e.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : EnteredTitle,
            amount : +EnteredAmount,
            date : new Date(EnteredDate)
        }

        // console.log(expenseData)
        props.onSave(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    const toggleFormVisible = (e)=>{
        e.preventDefault();
        if(isFormVisible){
            setFormVisible(false);
        }else{
            setFormVisible(true);
        }
    }

  
    if(!isFormVisible){
        return <button onClick={toggleFormVisible}>Add New Expense</button>
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={EnteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={EnteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={EnteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button onClick={toggleFormVisible}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;