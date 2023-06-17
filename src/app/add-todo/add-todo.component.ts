import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  todoService: TodoService;
  newTodo: string = '';

  clickHandlerAdd() {
    this.todoService.addTodo(this.newTodo);
  }
}
