# Projeto PlanetTech Test

Este projeto é uma aplicação simples de chat, sua API é desenvolvida com o **NestJS**, e seu frontend com **React**.

## Tecnologias Utilizadas

- **NestJS**: Framework NodeJs para construção da API
- **JavaScript e TypeScript**: Linguagens de programação utilizadas
- **Class-Validator**: Para validação dos dados recebidos
- **Swagger**: Para gerar a documentação da API

## Use a Aplicação pela nuvem

Essa aplicação possui um deploy disponível através do link https://planettechtest.onrender.com ele fica offline e assim que requisitado, online, demora cerca de um minuto para entrar no ar.

A API é acessível pelo link https://planettechbackend.onrender.com.

## Use a API localmente

### 1. Clonando o repositório

Clone o repositório para sua máquina local utilizando o comando abaixo, é preciso do ter o git já instalado:

```bash
git clone https://github.com/jao45gg/PlanetTechTest.git
```

### 2. Instalando as dependências

Entre na pasta do projeto e instale as dependências:

```bash
cd backend

npm i

cd frontend

npm i
```

### 3. Configuração das variavéis de ambiente

Para usar a API, você precisará configurar as variáveis de ambiente.

Crie um arquivo .env cópia do .env.example e configure as variaveis de ambiente, tanto no backend como no frontend.

### 4. Executando a aplicação

Para rodar a aplicação em modo de desenvolvimento, utilize os seguintes comandos:

Primeiro em um terminal para o backend

```bash
cd backend

npm run start:dev
```

Depois em um terminal para o frontend

```bash
cd frontend

npm run dev
```

A aplicação estará disponível em http://localhost:5173.

## Endpoints

A API gera automaticamente uma documentação interativa através do Swagger. Para acessar a documentação, basta iniciar o servidor da API e navegar até http://localhost:3000/docs.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
