import * as GetUsers from '../requests/GETUsers.request'

describe('Get Users', () => {
    it('Listar todos os usuarios', () => {
        GetUsers.allUsers().should((response) => {
            expect(response.body.code).to.eq(200);
            //expect(response.body).to.be.not.null;
            expect(response.body.data).is.not.empty;
            expect(response.body.data[0]).to.have.property("id");
            expect(response.body.data[0]).have.property("name");
            expect(response.body.data[0]).have.property("email");
            expect(response.body.data[0]).have.property("gender");
            expect(response.body.data[0]).have.property("status");

            //nao consegui usar a paginação
            
        });
    });
})