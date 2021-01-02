/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const PRIMEIRO_RESULTADO = "(//ul[@id='ad-list']//li)[1]";
const MODAL_OLX_PAY = "//div[@class='ds-drawer-element']";
const BOTAO_FECHA_MODAL = "(//div[@class='ds-drawer-element']//div//div)[1]";
const PRIMEIRO_TITULO = "(//h2)[1]";
const PRIMEIRO_VALOR = "(//div/p[contains(text(),'R$')])[1]";
const LINK_PROXIMA_PAGINA = "//a/span[text()= 'Próxima pagina']";
const BOTAO_SEGUNDA_PAGINA = "//li/div/a/span[text()= '2']";
const LINK_PAGINA_ANTERIOR = "//a/span[text()= 'Pagina anterior']";
const RESULTADOS_SEGUNDA_PAGINA = "//div/span[contains(text(), '51 - 100 de ')]";
const PRINT_SEGUNDA_PAGINA = "./print/print_segunda_pagina"


export function verificaPrimeiroResultado() {
    cy.xpath(PRIMEIRO_RESULTADO).should('be.visible')
    cy.xpath(PRIMEIRO_RESULTADO).scrollIntoView()
    hooks.geraLog('Primeiro resultado da pesquisa visualizado')
}

export function fechaModal() {
    cy.wait(8000);
    cy.xpath(MODAL_OLX_PAY).then($modal => {
        if ($modal.length > 0) {
            cy.xpath(BOTAO_FECHA_MODAL).click();
            hooks.geraLog('Modal OLX Pay fechado')
        } else {
            hooks.geraLog('Não tem modal')
        }
        hooks.geraLog('Modal tratado com sucesso')
    });
}

export function coletaPrimeiroResultado() {
    cy.xpath(PRIMEIRO_TITULO).then(function ($elem) {
        hooks.geraLog('O título coletado do primeiro anúncio é: ' + $elem.text())
    });
    cy.xpath(PRIMEIRO_VALOR).then(function ($valor) {
        hooks.geraLog('O preço coletado do primeiro anúncio é: ' + $valor.text())
    });
}

export function verificarMaisPaginas() {
    cy.xpath(LINK_PROXIMA_PAGINA).should('be.visible')
    cy.xpath(LINK_PROXIMA_PAGINA).scrollIntoView()
    hooks.geraLog('Verificada a existência de mais páginas com resultados da pesquisa')
}

export function irParaSegundaPagina() {
    cy.xpath(BOTAO_SEGUNDA_PAGINA).click({ force: true })
    cy.xpath(LINK_PAGINA_ANTERIOR).should('be.visible')
    cy.xpath(RESULTADOS_SEGUNDA_PAGINA).should('be.visible')
    cy.xpath(RESULTADOS_SEGUNDA_PAGINA).scrollIntoView()
    hooks.geraLog('Usuário corretamente direcionado para a segunda página')
}

export function tiraPrintSegundaPagina() {
    cy.screenshot(PRINT_SEGUNDA_PAGINA)
    hooks.geraLog("Print tirado corretamente e disponibilizado no diretório 'mochawesome-report/snapshots/olx.feature/print'")
}