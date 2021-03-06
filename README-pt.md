# Money Transfer

#### Linguagens: <a href="https://github.com/MarcusMartins38/datamonkeys">English<a/> ou Português

<p align="center">
<img src="./.github/HomeLigth.png" width=350 align="center" />
<img src="./.github/HomeDark.png" width=350 align="center" />
</p>

## Sumário
[Introdução](#introdução) :door:  
[Algumas das Tecnologias](#algumas-das-tecnologias) :computer:  
[Passo a passo](#passo-a-passo) :open_book:  
[Acessando o Deploy](#ou-você-pode-acessar-o-deploy) :computer:



## Introdução

É uma aplicação que simula a transferencia de dinheiro. A aplicação converte o dinheiro que você pretende transferir, para o valor que ele vale, em relação ao país que você irá transferir.


## Algumas das Tecnologias

**Front-End (ReactJS com TypeScript)**  
Algumas das bibliotecas utilizadas:
- axios
- date-fns
- react-day-picker
- react-icons
- react-router-dom
- styled-components


## Passo a passo

Com Yarn:
```
$ git clone https://github.com/MarcusMartins38/Money_Transfer.git
$ cd Money_Transfer
$ yarn
$ yarn start
```
Com Npm:

```
$ git clone https://github.com/MarcusMartins38/Money_Transfer.git
$ cd Money_Transfer
$ npm install
$ npm start
```

### Ou você pode acessar o Deploy

https://money-transfer.netlify.app


Obs: Nessa aplicação, eu estou usando uma Api que converte o dinheiro, que me da um acesso limitado (1000 por mês). Se a aplicação parar de converter o dinheiro, provavelmente é porque atingiu o limite do mês.
