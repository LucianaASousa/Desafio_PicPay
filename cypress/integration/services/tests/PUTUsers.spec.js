import * as PUTUsers from '../requests/PUTUsers.request'
import * as GETUsers from '../requests/GETUsers.request'
import * as POSTUsers from '../requests/POSTUsers.request'

describe('PUT Users', () => {
    it('Alterar o usuario', () => {
        GETUsers.allUsers().then((resAllUsers) => {
            PUTUsers.changeUser(resAllUsers.body[0].ID).should((resChangeUser) => {
                expect(resChangeUser.code).to.eq(200);
                expect(resChangeUser.body.data).is.not.empty;
                expect(resChangeUser.body.data.name).to.eq('Bianca Teste2');
            })
        })
    });
})

//nao consegui usar a paginação