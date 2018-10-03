import {Todo} from "./todo";

describe('Todo',  () => {
    const todo  = Todo.randomTodo();
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
