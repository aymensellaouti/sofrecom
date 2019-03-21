import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';
import {Todo} from '../../Model/todo';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'],
  providers: [TodoService]
})
export class StyleComponent implements OnInit {

  isEteinte = false;
  color = 'green';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  eteindre() {
    this.isEteinte = !this.isEteinte;
    this.todoService.logTodos();
  }

}
