import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./EnxpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    
    const [enteredYear, setEnteredYear] = useState('2020');

    const changedYearHandler = (filteredYear) => {
        setEnteredYear(filteredYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === enteredYear;
    })
    
    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={enteredYear} onChangeYear={changedYearHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;