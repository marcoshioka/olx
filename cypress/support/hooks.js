/// <reference types="Cypress"/>

const addContext = require('mochawesome/addContext')


export function verificaSnapshot() {
    cy.matchImageSnapshot()
    cy.task('log', 'Teste regressivo de imagem/layout ok')
}

export function geraLog(mensagem) {

    cy.task('log', mensagem)
}