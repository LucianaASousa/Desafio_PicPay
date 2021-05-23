// verbo/metodo - endpoint . motivo (request) . extensao
/// <reference types="cypress" />

function allUsers() {
    return cy.request({
        method: 'GET',
        //url: `/users?page=${pages}`,
        url: 'users?name=bianca',
        //url: 'users',
        headers: {
            'Authorization': 'Bearer 2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba',
            'Content-Type': 'application/json',
            'Accept': '*/*',
          },
        failOnStatusCode: false
    })
}

export { allUsers };
