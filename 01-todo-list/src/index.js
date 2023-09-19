import React from 'react';
import ReactDOM from 'react-dom/client';
import {TodoItemsTable} from './todo-table';

const todoItems = [
    {id: 1, description: 'Learn React', isCompleted: true},
    {id: 2, description: 'Learn Redux', isCompleted: false},
    {id: 3, description: 'Learn React Router', isCompleted: false},
    {id: 4, description: 'Learn React Native', isCompleted: false},
    {id: 5, description: 'Learn GraphQL', isCompleted: false},
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <h1>TODO List</h1>
        <TodoItemsTable items={todoItems}/>
    </>
);