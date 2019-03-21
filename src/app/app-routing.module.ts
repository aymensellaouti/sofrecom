import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cvTech/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {StyleComponent} from './directives/style/style.component';
import {DetailCvComponent} from './cvTech/detail-cv/detail-cv.component';

const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'cv/:id', component: DetailCvComponent},
  {path: 'style', component: StyleComponent},
  {path: 'todo', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
