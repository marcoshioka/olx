/// <reference types="Cypress"/>

const URL_OLX = 'https://www.olx.com.br';
const ICONE_OLX = "//a[@href= 'https://www.olx.com.br/']";
const CAMPO_PESQUISA = "//input[@id='searchtext']";
const BOTAO_PESQUISA = "//button[@class='searchSubmitBtn']";
const TITULO_RESULTADO = "//h1";
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


describe("OLX", function () {

    it("Verificar primeiro resultado da pesquisa", function () {
        cy.visit(URL_OLX);
        cy.xpath(ICONE_OLX).should('be.visible')
        cy.task('log', 'Site da OLX acessado')
        cy.xpath(CAMPO_PESQUISA).type('Chevrolet Tracker Premier', { force: true })
        cy.xpath(BOTAO_PESQUISA).click({ force: true })
        cy.xpath(TITULO_RESULTADO).contains('Chevrolet Tracker Premier')
        cy.task('log', 'Pesquisa por Chevrolet Tracker Premier realizada com sucesso')
        cy.xpath(PRIMEIRO_RESULTADO).should('be.visible')
        cy.xpath(PRIMEIRO_RESULTADO).scrollIntoView()
        cy.task('log', 'Primeiro resultado da pesquisa visualizado')
        cy.wait(8000);
        cy.xpath(MODAL_OLX_PAY).then($modal => {
            if ($modal.length > 0) {
                cy.xpath(BOTAO_FECHA_MODAL).click();
                cy.task('log', 'Modal OLX Pay fechado')
            } else {
                cy.task('log', 'Não tem modal')
            }
            cy.task('log', 'Modal tratado com sucesso')
        });
        cy.xpath(PRIMEIRO_TITULO).then(function ($elem) {
            cy.task('log', 'O título coletado do primeiro anúncio é: ' + $elem.text())
        });
        cy.xpath(PRIMEIRO_VALOR).then(function ($valor) {
            cy.task('log', 'O preço coletado do primeiro anúncio é: ' + $valor.text())
        });
    })

    it("Verificar resultado da pesquisa na segunda página", function () {
        cy.visit(URL_OLX);
        cy.xpath(ICONE_OLX).should('be.visible')
        cy.task('log', 'Site da OLX acessado')
        cy.xpath(CAMPO_PESQUISA).type('Notebook i7', { force: true })
        cy.xpath(BOTAO_PESQUISA).click({ force: true })
        cy.xpath(TITULO_RESULTADO).contains('Notebook i7')
        cy.task('log', 'Pesquisa por Notebook i7 realizada com sucesso')
        cy.xpath(LINK_PROXIMA_PAGINA).should('be.visible')
        cy.xpath(LINK_PROXIMA_PAGINA).scrollIntoView()
        cy.task('log', 'Verificada a existência de mais páginas com resultados da pesquisa')
        cy.wait(8000);
        cy.xpath(MODAL_OLX_PAY).then($modal => {
            if ($modal.length > 0) {
                cy.xpath(BOTAO_FECHA_MODAL).click();
                cy.task('log', 'Modal OLX Pay fechado')
            } else {
                cy.task('log', 'Não tem modal')
            }
            cy.task('log', 'Modal tratado com sucesso')
        });
        cy.xpath(BOTAO_SEGUNDA_PAGINA).click({ force: true })
        cy.xpath(LINK_PAGINA_ANTERIOR).should('be.visible')
        cy.xpath(RESULTADOS_SEGUNDA_PAGINA).should('be.visible')
        cy.xpath(RESULTADOS_SEGUNDA_PAGINA).scrollIntoView()
        cy.task('log', 'Usuário corretamente direcionado para a segunda página')
        cy.screenshot(PRINT_SEGUNDA_PAGINA)
        cy.task('log', "Print tirado corretamente e disponibilizado no diretório 'mochawesome-report/snapshots/olx.feature/print'")
    })
})