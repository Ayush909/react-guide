import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'

const Expenses = (props) =>{
    const DateFilterHandler = (data)=>{
        console.log(data)
    }
    return (
        <div>
            <ExpensesFilter onChangeDateFilter={DateFilterHandler}/>
            <Card className="expenses">
                <ExpenseItem title = {props.expenses[0].title} date = {props.expenses[0].date} amount = {props.expenses[0].amount}/>
                <ExpenseItem title = {props.expenses[1].title} date = {props.expenses[1].date} amount = {props.expenses[1].amount}/>
                <ExpenseItem title = {props.expenses[2].title} date = {props.expenses[2].date} amount = {props.expenses[2].amount}/>
            </Card>
        </div>
    )
}

export default Expenses;

