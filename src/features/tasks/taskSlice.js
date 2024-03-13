import {createSlice} from '@reduxjs/toolkit'

///Slice lo que hace es donde van a definir las funciones por ejemplo como, añadir, eliminar, actualizar, etc.

const initialState = [
    {
        id: 1,
        title: 'Esta es la primera tarea',
        completed: false
     },
    {
        id: 2,
        title: 'Esta es la segunda tarea',
        completed: false
    },
    {
        id: 3,
        title: 'Esta es la tercera tarea',
        completed: false
    }
]
  
export const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            const foundTask = state.find(initialState => initialState.id === action.payload)
            if(foundTask){
                state.splice(state.indexOf(foundTask)), 1;
            }
        },
        editTask: (state, action) => {
            const {id, title} = action.payload
            const foundTask = state.find((task => task.id === id))
            if(foundTask){
                foundTask.title = title;        
            }
        }

    }
});

//dentro de este export iran las acciones que estan dentro del reducers
export const {addTask, deleteTask, editTask} = taskSlice.actions

export default taskSlice.reducer
