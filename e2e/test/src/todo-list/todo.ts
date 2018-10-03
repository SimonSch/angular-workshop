export class Todo {

    static addTodo(todo:string):void{
        cy.get('.new-todo').type(todo);
        cy.get('.new-todo').type('{enter}');
    }

    static completeTodo(todo:string):void{
        cy.get('app-todo-list-item ').each(($el:any, index, $list) =>{
           if($el.context.textContent === todo){
               cy.get( `:nth-child(${index+1}) > app-todo-list-item > .view > .toggle`).check({force: true});
               cy.wait(500);
               cy.get( `:nth-child(${index+1}) > app-todo-list-item > .view`).should('have.class', 'completed')
           }
        });
    }

    static deleteTodo(todo:string):void{
        cy.get('button .destroy').trigger('mouseover').then(() => {
            cy.get( `button .destroy`).check({force: true});
        });
    }

    static randomTodo():string {
        return Math.floor(Math.random() * 101).toString();
    }
}