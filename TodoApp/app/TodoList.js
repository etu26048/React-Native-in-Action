import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {

    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos;
            case 'Complete':
                return todos.filter((todo) => todo.complete);
            case 'Active':
                return todos.filter((todo) => !todo.complete);
        }
    };

    todos = getVisibleTodos(todos, type);
    todos = todos.map((todo, i) => {
        return (
            <Todo
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                key={todo.todoIndex}
                todo={todo} />
        )
    });

    return (
        <View>
            {todos}
        </View>
    )
}

export default TodoList;