import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FavoritesTodosComponent } from './favorites-todos/favorites-todos.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  {
    path: 'favorites',
    component: FavoritesTodosComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
