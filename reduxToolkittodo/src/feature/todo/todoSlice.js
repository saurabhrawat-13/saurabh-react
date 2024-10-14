import { createSlice, nanoid } from "@reduxjs/toolkit";

const intialState = {
    todo: [{id: 1, text:"Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    intialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todo.push(todo)
        },
        removeTodo: (staate, action) => {
            state.todos = state.todos.filter((todo) => todo.
        id !== action.payload)
        },
    }

})

export const {addTodo, removeTodo} =  todoSlice.actions

export default todoSlice.reducer