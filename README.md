# API - Quantos de você existe no Brasil?
Esta API realiza web-scraping dinamico no site do IBGE e retorna informações sobre o nome pesquisado, como a quantidade de pessoas no Brasil que possuem o nome, a posição no ranking entre outros dados. </br>

Link para utilizaram a API rodando via Template Engine Mustache-Express.</br>
<a href="https://brunoferrazsabino.dev/quantos-de-vc-existe" target="_blank">https://brunoferrazsabino.dev/quantos-de-vc-existe</a>

# Algumas telas

![QuantosExisteBrasil1](https://user-images.githubusercontent.com/28497887/177858730-832697b9-7c26-48c0-92ac-02b45d879348.PNG)

![QuantosExisteBrasil2](https://user-images.githubusercontent.com/28497887/177858827-d85f69cf-2337-40b0-9303-042b5250674f.PNG)

# Para utilizar a API

### Endpoint

`https://brunoferrazsabino.dev/api/quantos-de-vc-existe`


### Retorno

Para obter o retorno é necessário encaminhar no endpoint via URL Encoding o campo name, seguido do value com o nome desejado a pesquisar.

A API retornará um objeto com as seguintes propriedades:

* `name`: Retorna o nome pesquisado

* `numberNamesBrasil`: Retorna a quantidade do nome pesquisado que tem no Brasil.

* `namePopular`: Retorna o número que o nome pesquisado está no ranking de nomes brasileiro.

* `statePopularName`: Retorna o Estado brasileiro que o nome pesquisado é mais popular.

* `name100ThousandState`: Retorna a frequência de pessoas com o nome pesquisado no Brasil a cada 100 mil habitantes.

* `percentage`: Retorna a porcentagem de pessoas no Brasil com o nome pesquisado.

### IBGE
Site do IBGE onde o web-scrapping dinâmico é realizado: </br>
`https://www.ibge.gov.br/censo2010/apps/nomes/#/search`

### Mustache-Express
Link para utilizaram a API rodando via Template Engine Mustache-Express.</br>
<a href="https://brunoferrazsabino.dev/quantos-de-vc-existe">https://brunoferrazsabino.dev/quantos-de-vc-existe</a>


### Pré-requisitos globais:
`npm install -g nodemon typescript ts-node`

### Instalação
`npm install`

### Para rodar o projeto
`npm run start-dev`

