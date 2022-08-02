import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

   const [task, setTask] = useState<Array<TaskType>>([
      {id: 1, title: 'HTML', isDone: true},
      {id: 2, title: 'React', isDone: false},
      {id: 3, title: 'Docker', isDone: true},
      {id: 4, title: 'JS', isDone: false},
      {id: 5, title: 'TS', isDone: true},
   ])

   const [filter, setFilter] = useState('all')

   const removeTodoList = (isD: number) => {
      const onDelTasked = task.filter(el => el.id !== isD)
      setTask(onDelTasked)
   }

   let colander = task
   if (filter === 'active') {
      colander = task.filter(value => value.isDone)
   }
   if (filter === 'completed') {
      colander = task.filter(value => !value.isDone)
   }

   const filteredTasked = (value: FilterValueType) => {
      setFilter(value)
   }

   return (
      <div>
         <TodoList
            task={colander}
            removeTodoList={removeTodoList}
            filteredTasked={filteredTasked}
         />
      </div>
   );
}

export default App;
