import { Injectable } from '@angular/core';
import {Todo} from '../Model/todo';

@Injectable()
export class TodoService {
  private todos: Todo [];
  constructor() {
    this.todos = [
      new Todo('mercredi', 'ferier')
    ];
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1 ) {
      this.todos.splice(index, 1);
    } else {
      console.log('Todo innexistant');
    }
  }
  logTodos() {
    console.log(this.todos);
  }
}
