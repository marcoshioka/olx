# language: pt
# encoding: utf-8   

@olx
Funcionalidade: Pesquisa OLX
Como usuário do sistema da OLX
Eu quero realizar pesquisas
Para encontrar meus produtos desejados

@primeiro_resultado
Cenário: Verificar primeiro resultado da pesquisa
Dado que eu vá até a página da OLX
Quando eu realizar uma pesquisa por 'Chevrolet Tracker Premier'
Então eu devo ver o primeiro resultado da pesquisa
E fechar o modal OLX Pay disponível
E imprimir o título com o valor do primeiro resultado

@resultado_segunda_página
Cenário: Verificar resultado da pesquisa na segunda página
Dado que eu vá até a página da OLX
Quando eu realizar uma pesquisa por 'Notebook i7'
Então eu devo ver o resultado da pesquisa com mais de uma página    
E fechar o modal OLX Pay disponível
E me direcionar para a segunda página dos resultados
E tirar um print do anúncio da segunda página