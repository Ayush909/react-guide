import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'

const Expenses = (props) =>{

    const [filterDate,setFilterDate] = useState('2020');

    const DateFilterHandler = (newFilterDate)=>{
        // console.log(newFilterDate)
        setFilterDate(newFilterDate);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterDate;
    })

    return (
        <div>
            
            <Card className="expenses">
                <ExpensesFilter onChangeDateFilter={DateFilterHandler} filterDate={filterDate}/>
                {filteredExpenses.map(
                    expense=> <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
                )}
                
               
            </Card>
        </div>
    )
}

export default Expenses;

