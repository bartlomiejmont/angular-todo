import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  todoService: TodoService;

  @Input()
  todo!: Todo;

  isEdit: boolean = false;
  newTodoValue: string = '';

  clickHandlerDelete() {
    this.todoService.deleteTodo(this.todo.value);
  }

  clickHandlerComplete(event: any) {
    this.todoService.completeTodo(this.todo.value, event.target.checked);
  }

  clickHandlerEdit() {
    this.newTodoValue = this.todo.value;
    this.isEdit = true;
  }

  clickHandlerSave() {
    this.todoService.editTodo(this.todo.value, this.newTodoValue);
    this.isEdit = false;
  }
}
