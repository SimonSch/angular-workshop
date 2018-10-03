import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor() {
  }

  public getAllTodos(): Observable<Todo[]> {
    return new Observable((observer) => {
      observer.next([
        new Todo({id: 1, title: 'Read article', complete: false})
      ]);
    });
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return new Observable( (observer) => {
      observer.next(new Todo({id: 1, title: 'Read article', complete: false}));
      }
    );
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return new Observable( (observer) => {
        observer.next(new Todo({id: 1, title: 'Read article', complete: false}));
      }
    );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return new Observable( (observer) => {
        observer.next(new Todo({id: 1, title: 'Read article', complete: false}));
      }
    );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return null;
  }
}
