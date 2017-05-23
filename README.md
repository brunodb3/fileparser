# Node File Parser

Um projeto de teste desenvolvido em NodeJS, utilizando [pdf2json](https://www.npmjs.com/package/pdf2json) e [xlsx](https://www.npmjs.com/package/xlsx).
Desenvolvido por Bruno Duarte Brito.

Consiste em:

  * [Conversor de Arquivos](https://github.com/brunodb3/fileparser)

> Este projeto foi desenvolvido Bruno Duarte Brito mantendo em mente o código open-source.

### Versão
0.0.1

### Tecnologia envolvida

Lista de tecnologias e linguagens de programação envolvidas:

* [NodeJS](https://nodejs.org)

### Instalação

Antes de baixar o repositório, tenha certeza que sua máquina possui [NodeJS](https://nodejs.org/en/) instalado.

Clone o repositório em sua máquina:

```sh
$ git clone [url-do-repositorio]
$ cd [pasta-do-repositorio]
```

Então, prepare a plataforma e baixe os módulos:

```sh
$ npm install # instala todos os módulos do npm
```

Coloque um arquivo de extensão ```.pdf``` ou ```.xlsx / excel``` dentro da pasta ```./input_files``` e execute o conversor:

```sh
$ node server.js "example_xlsx.xlsx" true # o parâmetro "true" serve para exportar o arquivo em json
```

**Bruno Duarte Brito - 2017**