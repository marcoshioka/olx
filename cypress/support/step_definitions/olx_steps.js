import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as hooks from '../hooks';
import * as homeOlxPage from '../page_objects/home_olx_page';
import * as resultadosOlxPage from '../page_objects/resultados_olx_page';

Given(/^que eu vá até a página da OLX$/, () => {
    homeOlxPage.visita();
});

When(/^eu realizar uma pesquisa por(.*)$/, (pesquisa) => {
    homeOlxPage.realizaPesquisa(pesquisa);
});

Then(/^eu devo ver o primeiro resultado da pesquisa$/, () => {
    resultadosOlxPage.verificaPrimeiroResultado();
});

Then(/^fechar o modal OLX Pay disponível$/, () => {
    resultadosOlxPage.fechaModal();
});

Then(/^imprimir o título com o valor do primeiro resultado$/, () => {
    resultadosOlxPage.coletaPrimeiroResultado();
});

Then(/^eu devo ver o resultado da pesquisa com mais de uma página$/, () => {
    resultadosOlxPage.verificarMaisPaginas();
});

Then(/^me direcionar para a segunda página dos resultados$/, () => {
    resultadosOlxPage.irParaSegundaPagina();
});

Then(/^tirar um print do anúncio da segunda página$/, () => {
    resultadosOlxPage.tiraPrintSegundaPagina();
})