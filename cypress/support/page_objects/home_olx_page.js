/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const URL_OLX = 'https://www.olx.com.br';
const ICONE_OLX = "//a[@href= 'https://www.olx.com.br/']";
const CAMPO_PESQUISA = "//input[@id='searchtext']";
const BOTAO_PESQUISA = "//button[@class='searchSubmitBtn']";
const TITULO_RESULTADO = "//h1";


export function visita() {
    cy.visit(URL_OLX);
    cy.xpath(ICONE_OLX).should('be.visible')
    hooks.geraLog('Site da OLX acessado')
}

export function realizaPesquisa(pesquisa) {
    var pesquisa_recebida = pesquisa.replace(/'/g, '');
    var pesquisa_formatada = pesquisa_recebida.trimStart()
    cy.xpath(CAMPO_PESQUISA).type(pesquisa_formatada, { force: true })
    cy.xpath(BOTAO_PESQUISA).click({ force: true })
    cy.xpath(TITULO_RESULTADO).contains(pesquisa_formatada)
    hooks.geraLog('Pesquisa por ' + pesquisa_formatada + ' realizada com sucesso')
}

