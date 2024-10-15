import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks/useTodos'


export const TodoApp = () => {

    const {todos, handleDelete, handleNewTodo, handleToggleTodo} = useTodos()

  return (
    <>
        <h1>TodoApp {todos.length}, <small>pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <TodoList 
                todos={todos} 
                onDeleteTodo={handleDelete}
                onToggleTodo={handleToggleTodo}/>
        </div>
        <div className='col-5'>
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
        </div>
    </>
  )
}
