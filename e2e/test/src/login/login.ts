export class Login {
    navigate() {
        cy.visit('http://localhost:4200');
        return this;
    }

    login() {
        this.navigate();
        cy.get('[formcontrolname="username"]').type('demo');
        cy.get('[formcontrolname="password"]').type('demo');
        cy.get('button').click({force: true});
    }

    logout() {
        cy.get('button').click({force: true});
    }
}
