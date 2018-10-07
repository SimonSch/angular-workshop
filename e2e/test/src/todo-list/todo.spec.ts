import {Todo} from './todo';
import {Login} from '../login/login';

describe('Todo', () => {
    before(() => {
        new Login().login();
    });

    const todo = Todo.randomTodo();
    it('should create a todo', () => {
        Todo.addTodo(todo);
    });

    it('should complete a todo', () => {
        Todo.completeTodo(todo);
    });

    it('should delete a todo', () => {
        Todo.deleteTodo(todo);
    });
});
