import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'

const Expenses = (props) =>{

    const [filterDate,setFilterDate] = useState('2020');

    const DateFilterHandler = (newFilterDate)=>{
        console.log(newFilterDate)
        setFilterDate(newFilterDate);
    }
    return (
        <div>
            
            <Card className="expenses">
                <ExpensesFilter onChangeDateFilter={DateFilterHandler} filterDate={filterDate}/>
                <ExpenseItem title = {props.expenses[0].title} date = {props.expenses[0].date} amount = {props.expenses[0].amount}/>
                <ExpenseItem title = {props.expenses[1].title} date = {props.expenses[1].date} amount = {props.expenses[1].amount}/>
                <ExpenseItem title = {props.expenses[2].title} date = {props.expenses[2].date} amount = {props.expenses[2].amount}/>
            </Card>
        </div>
    )
}

export default Expenses;

