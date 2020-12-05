
<h3 align="center">
  Sistema Anamnese APP Senac-DF
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

</p>

## 📝 Conteúdo

- [Sobre](#about)
- [Inicializando a aplicação](#getting_started)
- [Uso](#usage)
- [Ferramentas](#built_using)
- [Autores](#authors)
- [Considerações finais](#acknowledgement)

---

## 🏁 Sobre <a name = "about"></a>

- Projeto desenvolvido com o propósito acadêmico de ser o cliente mobile do projeto Sistema de Anamnese, referente ao Projeto Interdisciplinar 5 da faculdade Senac DF. Desenvolvida usando Typescript como linguagem de programação e utilizando [React-Native](https://reactnative.dev/) como framework para desenvolvimento nativo, o MVP em questão tem as funções de cadastrar e logar o usuário, contendo uma página de dashboard com os psicólogos cadastrados na clínica além de suas disponíbilidades de atendimentos.


### Pré-requisitos
- Editor de códigos como o [Visual Studio Code](https://code.visualstudio.com/download), interpretador JavaScript [NodeJS](https://nodejs.org/pt-br/download/) de preferência na versão LTS 12.8 e um gerênciador de pacotes [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) ou o próprio NPM que já vem embutido no NodeJS.

### Faça um clone do projeto e acesse a pasta

```bash
git clone https://github.com/RafaelLeveske/sistema_anamnese_app_v3.git
cd sistema-anamnese-api-vfinal
```

### Instalação

Após ter aberto arquivo no terminal ou prompt de comando digite o comando abaixo para instalar todas as dependências do proeto. OBS: caso tenha instalado o gerênciador de pacotes [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable), escolha a primeira opção caso esteja usando NPM escolha a segunda opção.

```
yarn
```

ou

```
npm install
```


### Inicializando o projeto

Depois de instalar as depêndencias do projeto tenha a [API](https://github.com/RafaelLeveske/sistema-anamnese-api-vfinal) do projeto rodando em servidor local, e em seguida configure o arquivo ./src/services/api.ts na parte (baseURL) insira o ip da sua máquina conforme o exemplo abaixo:

```bash
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.112:3333',
});

export default api;

```

OBS: É importante que a API esteja rodando na porta 3333, portanto é necessário manter a configuração de porta neste arquivo, e também é imprescindível que o ip da sua máquina esteja inserido corretamente neste arquivo caso contário você não conseguirá a conexão com a API.

Em seguida é preciso ter um dispositivo conectado ao computador com uma permissão de desenvolvedor ou um emulador já rodando. A opção mais fácil entretanto é que no caso já exista um dispositivo conectado via USB ao computador, pois as opções de configuração no arquivo api.ts já estão pré setadas para esse tipo de desenvolvimento.

Com o dispositivo conectado execute o comando abaixo para inicializar o bundle:

```
yarn start
```

ou

```
npm run start
```

Em seguida com o bundle e a API rodando está na hora de inicializar o projeto no dispositivo conectado via USB. Para isso execute o comando:

```
yarn android
```

ou

```
npx react-native run-android
```

E pronto! Após a build do projeto o mesmo será iniciado automaticamente em seu dispositivo. Após o aplicativo estar aberto faça o seu cadastro e caso de tudo certo prossiga com o login na aplicação, e caso suas credênciais sejam autênticadas você será direcionado para a página principal da aplicação.

### Obeservações:

Durante o desenvolvimento aconteceram alguns problemas relacionado a instalação das depêndencias via Yarn, caso isso aconteça basta fazer a instalação do projeto usando NPM.

## 🎈 Uso <a name="usage"></a>

Atualmente a aplicação conta apenas com as funções cadastrar e logar um usuário e exibir listagem de psicólogos disponíveis na clínica.


## ⛏️ Ferramentas <a name = "built_using"></a>

- [Node](https://nodejs.org/en/) - JavaScript runtime environment.
- [React-Native](https://reactnative.dev/) - A framework to build native apps.

## ✍️ Autores <a name = "authors"></a>

- [@RafaelLeveske](https://github.com/RafaelLeveske)
- Valdisson Nunes
- Leandro Raineri

## 🎉 Considerações finais <a name = "acknowledgement"></a>

- Esse projeto foi desenvolvido com intuito acadêmico para desenvolvimento da aplicação Sistema Anamnese para o Projeto Interdisciplinar 5 da Faculdade de Técnologia Senac DF.
