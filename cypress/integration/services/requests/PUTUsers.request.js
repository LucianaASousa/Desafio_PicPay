/// <reference types="cypress" />

const payloadChangeUser = require('../payloads/change-user.json')

function changeUser(params) {
    return cy.request({
        method: 'PUT',
        //url: `users/${idUser}`,
        url: 'users?name=bianca',
        failOnStatusCode: false,
        headers: {
            'Authorization': 'Bearer 2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba',
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
        body: payloadChangeUser

    })

}

export { changeUser };