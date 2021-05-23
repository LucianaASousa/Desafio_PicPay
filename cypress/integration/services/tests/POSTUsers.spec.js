/// <reference types="cypress"/>

import * as POSTUsers from '../requests/POSTUsers.request';

context('POST Users', () => {
    it('Adicionar um novo usuario', () => {
        POSTUsers.addUser().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.code).to.eq(201);
            expect(response.body.data.name).to.equal("Bianca Teste");
            expect(response.body.data.email).to.equal("biancateste@hotmail.com");
            expect(response.body.data.gender).to.equal("Female");
            expect(response.body.data.status).to.equal("Active");
        })
    });
});