import {Login} from './login';

describe('Login', () => {
    it('should login with user demo', () => {
        new Login().login();
    });
});
