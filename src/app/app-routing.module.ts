import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FavoritesTodosComponent } from './favorites-todos/favorites-todos.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'favorites', component: FavoritesTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
