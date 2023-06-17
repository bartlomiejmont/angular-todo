import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    { value: 'zadanie 1', done: false, favorite: false },
    { value: 'zadanie 2', done: false, favorite: false },
    { value: 'zadanie 3', done: false, favorite: false },
    { value: 'zadanie 4', done: false, favorite: false },
  ];

  getTodos() {
    return this.todos;
  }

  getFavoriteTodos() {
    return this.todos.filter((t) => t.favorite === true);
  }

  addTodo(value: string) {
    // w tym wypadku value to to samo co value: value
    this.todos.push({ value, done: false, favorite: false });
  }

  completeTodo(value: string, checked: boolean) {
    const todo = this.todos.find((t) => t.value === value);
    if (todo) {
      todo.done = checked;
    }
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
  }

  saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  constructor() {
    if (!JSON.parse(localStorage.getItem('todos') || '[]')) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
    }
  }
}
