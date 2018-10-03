import {Login} from "./login";

describe('Login',  () =>  {
    it('should login with user demo', () => {
        const login = new Login().login();
    })
});