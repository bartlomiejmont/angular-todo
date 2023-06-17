import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-favorites-todos',
  templateUrl: './favorites-todos.component.html',
  styleUrls: ['./favorites-todos.component.css'],
})
export class FavoritesTodosComponent {
  constructor(
    public todoService: TodoService,
    public httpService: HttpService
  ) {}

  photo: string = '';

  ngOnInit() {
    this.httpService
      .getRandomImageUrl()
      .subscribe((o) => (this.photo = o.message));
  }
}
