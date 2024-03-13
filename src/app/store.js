import {configureStore} from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice';

//STORE ES COMO SI FUESE UN setState es decir para actualizar un estado


 const store = configureStore({
    reducer: {
        task: taskReducer,
    }
});

export default store;


