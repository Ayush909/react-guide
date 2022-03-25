import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = () =>{

    const [EnteredTitle,setEnteredTitle] = useState('');
    const [EnteredAmount,setEnteredAmount] = useState('');
    const [EnteredDate,setEnteredDate] = useState('');

    // const [UserInput,setUserInput] = useState({
    //     EnteredTitle  : '',
    //     EnteredAmount : '',
    //     EnteredDate   : ''
    // })

    const titleChangeHandler = (e) =>{
    //    setUserInput((prevState)=>{
    //        return {...prevState, EnteredTitle : e.target.value}
    //    })
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) =>{
        // setUserInput((prevState)=>{
        //     return {...prevState, EnteredAmount : e.target.value}
        // })
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = (e) =>{
        // setUserInput((prevState)=>{
        //     return {...prevState, EnteredDate : e.target.value}
        // })
        setEnteredDate(e.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : EnteredTitle,
            amount : EnteredAmount,
            date : new Date(EnteredDate)
        }

        console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    // console.log(EnteredTitle,' ', EnteredAmount, ' ',EnteredDate);
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
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;