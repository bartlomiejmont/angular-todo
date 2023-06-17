import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FavoritesTodosComponent } from './favorites-todos/favorites-todos.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FavoritePipe } from './favorite.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    TodoListComponent,
    FavoritesTodosComponent,
    FavoritePipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [TodoService, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
