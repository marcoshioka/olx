# OLX

## README 
Repositório com estrutura de automação de testes da OLX, com Javascript (Node.js), Cucumber e Cypress

#### Frameworks básicos: 
- Node.js, Cucumber e Cypress.

#### Configuração: 
- Realizar clone do repositório.
- Ter instalado o Node.js na máquina. 
- Após isso, para instalar as dependências, executar na raíz do projeto o comando: 
```sh
 npm install
```
#### Estrutura do projeto:
- As features em Gherkin (Cucumber) ficam no diretório "cypress/integration"
- Os steps definitions e page objects estão em suas respectivas pastas no diretório "cypress/support" 
- Foi criado o arquivo "olx.spec.js" para o teste sem BDD (para quem preferir a estrutura dessa maneira), no diretório "cypress/integration"
- São gerados vídeos da execução de cada feature no diretório "cypress/videos" 
- Se caso solicitado na execução do BDD, o report cucumber-html-report é gerado no diretório "report"
- Foi adicionado o método RETRIES no index.js, para que a automação re-execute um step que falhou mais 2 vezes 
- O print gerado no segundo teste é exibido no diretório "mochawesome-report/snapshots/olx.feature/print"
- Foi criado um .gitignore para não subir os prints e vídeos para o repositório

#### Reports:
Temos configurado o Mochawesome-report e o Cucumber-html-report neste projeto

**Mochawesome-report**
- Disponível no diretório "mochawesome-report"
- Os prints dos steps que falham na execução são exibidos na pasta "snapshots"
- Se um step falha, porém o cénario passa na re-execução do step, o Mochawesome exibe a mensagem de erro mesmo com o teste passando
- Se o cenário falha, o Mochawesome apresenta a mensagem de falha com um print

**Cucumber-html-report**
- Disponível no diretório "report"
- Só é disponível na execução dos cenários com Cucumber (BDD) e quando solicitada a execução (npm run report)
- Apresenta os passos da feature e quando falha, a mensagem de erro

#### Como executar os testes:
**Para executar todas as features, specs e cenários diretamente pelo Cypress de forma headless (usando Electron), o comando é:**
```sh
./node_modules/.bin/cypress run
```
ou 
```sh
npx cypress run
```
ou pelo script 
```sh
npm run cy:run
```
**Para executar todas as feature, specs e cenários diretamente pelo Chrome (se instalado), o comando é:**
```sh 
./node_modules/.bin/cypress run --browser chrome
```
ou 
```sh
npx cypress run --browser chrome
```

**Para executar apenas a spec (sem BDD), o comando é:**
```sh 
./node_modules/.bin/cypress run --spec "cypress/integration/olx.spec.js"
```
ou 
```sh
npx cypress run --spec "cypress/integration/olx.spec.js"
```

**No package.json, estão configurados alguns scripts.**
- Para executar o Cypress por tags, executar o script de tags como no exemplo abaixo: 
```sh
npm run tags TAGS='@resultado_segunda_página'
```

- Para executar por tags e gerar um report no final, executar o script de tags e report em conjunto, como no exemplo abaixo: 
```sh
npm run tags TAGS='@olx'; npm run report
```

### Circle CI: 
Foi incluído um step para execução dessa automação no Circle CI (CI/CD/Continuous Testing). A configuração está no arquivo "circle.yml" na raíz do projeto. 

### Observação:
- Foi criado o step "E fechar o modal OLX Pay disponível" na feature para dispensar o modal/pop-up do OLX Pay quando exibido. Se o modal for removido do site, esse step e seus métodos devem ser desconsiderados da automação.
- Foi observada também uma instabilidade em relação a esse modal (hora é apresentado, hora demora para aparecer e tem hora que não aparece). O método de re-execução do step foi implementado também pensando nesse passo.

### Informação de versões:
- 1.0.0: versão inicial

### Autor:
- Marcos Ribeiro Hioka
- contato: marcosribeirohioka@gmail.com