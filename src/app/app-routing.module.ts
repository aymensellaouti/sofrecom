import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cvTech/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {StyleComponent} from './directives/style/style.component';
import {DetailCvComponent} from './cvTech/detail-cv/detail-cv.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {AddComponent} from './cvTech/add/add.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'cv', pathMatch: 'full'},
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: 'add', component: AddComponent},
      {path: ':id', component: DetailCvComponent},
    ]},
  {path: 'cv/:id', component: DetailCvComponent},
  {path: 'style', component: StyleComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
