import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../Model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = '';
  content = '';
  todos: Todo[];
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    this.todoService.addTodo(new Todo(this.title, this.content));
    this.title = '';
    this.content = '';
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
