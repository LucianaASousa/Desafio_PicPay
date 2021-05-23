import * as DELETEUsers from '../requests/DELETEUsers.request';
import * as GETUsers from '../requests/GETUsers.request';
import * as POSTUsers from '../requests/POSTUsers.request';

describe('DELETE Users', () => {
    it('Deletar um usuario', () => {
        GETUsers.allUsers().then((resAllUsers) => {
            
            DELETEUsers.deleteUser(resAllUsers.body[0].id).should((resDeleteUser) => {
                expect(resDeleteUser.status).to.eq(200)
            })
        })
    });

    // it('Criar e excluir um user', () => {
    //     POSTUsers.addUser().then((resAddUser) => {
    //         DELETEUsers.deleteUser(resAddUser.body.data.ID).should((resDeleteUser) => {
    //             expect(resDeleteUser.body.code).to.eq(200);
    //         })
    //     })
    // });

    
    //nao consegui usar a paginação

});