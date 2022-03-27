import React,{useState} from "react";
import ExpenseList from "./ExpenseList";
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
                <ExpenseList items={filteredExpenses}/>          
            </Card>
        </div>
    )
}

export default Expenses;

