import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [expenseClicked, setExpenseClicked] = useState(0);
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredAmount: event.target.value };
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    }; 

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setExpenseClicked(0);
    };

    

    const addExpeneseHandler = () => {
        setExpenseClicked(1);
    }

    const cancelExpenseHandler = () => {
        setExpenseClicked(0);
    }

    const addNewExpense = (<div><button onClick={addExpeneseHandler}>Add New Expense</button></div>);
    return (<>
        {expenseClicked == 0 && addNewExpense}
        {expenseClicked > 0 &&
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' 
                        value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' min="0.01" step="0.01" 
                        value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' min="2019-01-01" max="2022-12-31" 
                        value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={cancelExpenseHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
    }
    </>
    )
}

export default ExpenseForm;