import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public todoService: TodoService,
    public authService: AuthService
  ) {}
}
