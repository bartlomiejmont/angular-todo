import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = [
    { value: 'zadanie 1', done: false },
    { value: 'zadanie 2', done: false },
    { value: 'zadanie 3', done: false },
    { value: 'zadanie 4', done: false },
  ];

  getTodos() {
    return this.todos;
  }

  addTodo(value: string) {
    // w tym wypadku value to to samo co value: value
    this.todos.push({ value, done: false });
  }

  completeTodo(value: string, checked: boolean) {
    const todo = this.todos.find((t) => t.value === value);
    if (todo) {
      todo.done = checked;
    }
    console.log(this.todos);
  }

  deleteTodo(value: string) {
    this.todos = this.todos.filter((t) => t.value !== value);
  }

  editTodo(firstValue: string, newValue: string) {
    console.log(firstValue, newValue);
    const todo = this.todos.find((t) => t.value === firstValue);
    if (todo) {
      todo.value = newValue;
    }
    console.log(todo);
  }

  constructor() {}
}
