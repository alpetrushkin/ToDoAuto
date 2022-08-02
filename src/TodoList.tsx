import React from 'react';
import {FilterValueType} from "./App";

type TodoListType = {
   task: Array<TaskType>
   removeTodoList: (isD: number) => void
   filteredTasked: (value: FilterValueType) => void
}

export type TaskType = {
   id: number
   title: string
   isDone: boolean
}

export const TodoList = (props: TodoListType) => {
   return (
      <div>
         <ul>
            {props.task.map((el) => {
               return (
                  <li key={el.id}>
                     <button onClick={() => props.removeTodoList(el.id)}>x</button>
                     <input type="checkbox" checked={el.isDone}/>
                     <span>{el.title}</span>
                  </li>
               )
            })}
         </ul>
         <button onClick={() => props.filteredTasked('all')}>all</button>
         <button onClick={() => props.filteredTasked('active')}>active</button>
         <button onClick={() => props.filteredTasked('completed')}>completed</button>
      </div>
   );
};
